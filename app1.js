function splitTreasure(treasure){
	//initialize a separate chest that will store all the shares
	const treasureDivided = [];
	//If all the gems in the bag are the same, you can split it between treasure.length of seekers
	if(treasure.every((val, item, treasure) => val === treasure[0])){
		treasure.forEach(element => {
			treasureDivided.push([Number(element)])
		});
		console.log(treasureDivided);
		console.log(`All the gems in the chest are the same, so you can split it between ${treasure.length} seekers!`);
		return treasureDivided;
	} else {
	// sort the gems from biggest to the lowest
	const sortedTreasure = treasure.sort((a, b) => b - a);
	//set first gem (biggest) in the bag as a match case and the rest as the treasure that needs dividing
	const [firstGem, ...treasureToBeDivided] = sortedTreasure;
	//push the first share in to the chest
	treasureDivided.push([firstGem]);
	//await addShare function to return a full bag
	console.log("Treasure left to divide",treasureToBeDivided);
	console.log("Treasure that has been divided",treasureDivided);
	addShare(treasureToBeDivided, treasureDivided);
	console.log(treasureDivided);
	console.log(`The treasure has been shared equally between ${treasureDivided.length} seekers`);
	return treasureDivided;
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
		console.log("Treasure has been divided");
	}
}

function addGem(treasureToBeDivided, treasureDivided, pirateBag){
	//add a gem to the pirateBag
	
	// if pirateBag.length not bigger than 0
	if(pirateBag.length === 0){
		pirateBag.push(treasureToBeDivided[0])
		treasureToBeDivided.splice(0, 1)
		checkIfGemCanBeAdded(treasureToBeDivided, treasureDivided, pirateBag);
	} else {
		checkIfGemCanBeAdded(treasureToBeDivided, treasureDivided, pirateBag);
	}
	return pirateBag;
}

function checkIfGemCanBeAdded(treasureToBeDivided, treasureDivided, pirateBag){
	console.log(`Pirate bag contains: ${pirateBag}`);
	// check the value of the pirate bag
	let pirateBagValue = pirateBag.reduce((a, b) => { Number(a) + Number(b)})
	console.log(`The value of pirate bag is ${pirateBagValue}`);
	// if the bag doesn't equal first share, add a gem, otherwise return a bag
	if(!(pirateBagValue >= treasureDivided[0][0])){
		for(let index = treasureToBeDivided.length - 1; index >= 0; index--){
			console.log("haha");
			if(pirateBagValue + treasureToBeDivided[index] === treasureDivided[0][0]){
				console.log(`Found a gem, pushing ${treasureToBeDivided[index]} to a Pirate bag containing ${pirateBag}`);
				pirateBag.push(treasureToBeDivided[index]);
				console.log(`Removing used gem with value of ${treasureToBeDivided[index]} from the array`);
				treasureToBeDivided.splice(index, 1);
				pirateBagValue = pirateBag.reduce((a, b) =>  Number(a) + Number(b));
				console.log(`Bag total: ${pirateBagValue}`);
				
				if(pirateBagValue === treasureDivided[0][0]){
					console.log(`Sending a treasure bag with ${pirateBag} over to the main function!`);
				return pirateBag;	
				} else if(!(pirateBagValue + treasureToBeDivided[index] > treasureDivided[0][0])){
					console.log("Not enough! Trying to add another gem...");
					addGem(treasureToBeDivided, treasureDivided, pirateBag);
				}
				// if(pirateBagValue + treasureToBeDivided[index] < treasureDivided[0][0]){
				// 	pirateBag.push(treasureToBeDivided[index])
				// 	treasureToBeDivided.splice(index, 1);
					
				// }


			}
			
		}
	} else {
		return pirateBag;
	}
}

//splitTreasure([6,3,2,4,1])
splitTreasure([3,2,7,7,14,5,3,4,9,2]);
//splitTreasure([2, 10, 2, 4, 2, 9, 3, 5, 1, 2])
//splitTreasure([4,4,4])
//splitTreasure([27,7,20]) 
//splitTreasure([6,3,2,4,1] )
//splitTreasure([3,2,7,7,14,5,3,4,9,2])
// [[14], [9, 5], [7, 7], [4, 3, 3, 2, 2]]


module.exports = {
	splitTreasure: splitTreasure
}