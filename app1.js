function splitTreasure(treasure){
	// sort the gems from biggest to the lowest
	const sortGems = (a, b) => b - a;
	const sortedTreasure = treasure.sort(sortGems);
	console.log(sortedTreasure);
	//If all the gems in the bag are the same, you can split it between treasure.length of seekers
	if(sortedTreasure.every( (val, item, sortedTreasure) => val === sortedTreasure[0]) ){
		console.log(`All the gems in the chest are the same, so you can split it between ${treasure.length} seekers!`);
	} else {
	//set first gem (biggest) in the bag as a match case and the rest as the treasure that needs dividing
	const [firstGem, ...treasureToBeDivided] = sortedTreasure;
	//initialize a separate chest that will store all the shares
	const treasureDivided = [];
	//push the first share in to the chest
	treasureDivided.push([firstGem]);
	//check for any duplicates, if found, push them in to main array
	console.log(treasureToBeDivided);	
	
	treasureToBeDivided.forEach((element, index) => {
		if(element === treasureToBeDivided[0]){
			console.log(`Pushing gem of value ${element} to the main array`);
			treasureDivided.push([element]);
			console.log(treasureToBeDivided);
			treasureToBeDivided.splice(index, 1);
			index--;
			console.log(treasureToBeDivided);	
		}
	});
	//await addShare function to return a full bag
	addShare(treasureToBeDivided, treasureDivided);
	console.log(treasureDivided);
	console.log(`The treasure has been shared equally between ${treasureDivided.length} seekers`);
}}

function addShare(treasureToBeDivided, treasureDivided){
	// initialize a clear pirate bag
	let pirateBag = [];
	// initialize function addGem to fill the bag
	pirateBag = addGem(treasureToBeDivided, treasureDivided, pirateBag);
	//push the bag in to the main array and check if there is any other treasure to be split.
	treasureDivided.push(pirateBag)
	if(treasureToBeDivided.length > 0){
		addShare(treasureToBeDivided, treasureDivided);
	} else {
		console.log("Treasure fully divided wohoo");
	}
}

function addGem(treasureToBeDivided, treasureDivided, pirateBag){
	//add a gem to the pirateBag
	pirateBag.push(treasureToBeDivided[0])
	treasureToBeDivided.splice(0, 1)
	console.log(`Pirate bag contains: ${pirateBag}`);
	// check the value of the pirate bag
	let pirateBagValue = pirateBag.reduce((a, b) => { Number(a) + Number(b)})
	console.log(`The value of pirate bag is ${pirateBagValue}`);
	// if the bag doesn't equal first share, add a gem, otherwise return a bag
	if(!(pirateBagValue >= treasureDivided[0][0])){
		for(let index = treasureToBeDivided.length - 1; index >= 0; index--){
			if(pirateBagValue + treasureToBeDivided[index] <= treasureDivided[0][0]){
				console.log(`Found a gem, pushing ${treasureToBeDivided[index]} to a Pirate bag containing ${pirateBag}`);
				pirateBag.push(treasureToBeDivided[index]);
				console.log(`Removing used gem with value of ${treasureToBeDivided[index]} from the array`);
				treasureToBeDivided.splice(index, 1);
				let bagTotal = pirateBag.reduce((a, b) =>  Number(a) + Number(b));
				console.log(`Bag total: ${bagTotal}`);
				if(bagTotal === treasureDivided[0][0]){
					console.log(`Sending a tresure bag with ${pirateBag} over to the main function!`);
					return pirateBag;	
				} else if(!(bagTotal + treasureToBeDivided[index] > treasureDivided[0][0])){
					console.log("Not enough! Trying to add another gem...");
					addGem(treasureToBeDivided, treasureDivided, pirateBag);
				}				
			} 
			// else if(index > -1) {
			// 		addGem(treasureToBeDivided, treasureDivided, pirateBag)
			// 		console.log("haha");
			//} 
			else {
				console.log("Can't find a match! Can't equally share this treasure! Stopping...");
				return [];
			}	
		}
	}
}


splitTreasure([27, 7, 20, 13, 14, 27, 27, 7, 20, 13, 14, 27]);
//[2, 10, 2, 4, 2, 9, 3, 5, 1, 2]
module.exports = {
	splitTreasure: splitTreasure
}