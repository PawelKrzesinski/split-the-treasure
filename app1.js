function splitTreasure(treasure){
	//initialize a separate chest that will store all the shares
	let treasureDivided = [];
	//If all the gems in the bag are the same, you can split it between treasure.length of seekers
	if(treasure.every((val, item, treasure) => val === treasure[0])){
		treasureDivided = treasure;
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
	addShare(treasureToBeDivided, treasureDivided, firstGem);
	console.log(`The treasure has been shared equally between ${treasureDivided.length} seekers`);
	console.log(treasureDivided);
	return treasureDivided;
}}

function addShare(treasureToBeDivided, treasureDivided, firstGem){
	// initialize a clear pirate bag
	let pirateBag = [];
	// initialize function addGem to fill the bag
	pirateBag = addGem(treasureToBeDivided, treasureDivided, firstGem, pirateBag);
	//push the bag in to the main array and check if there is any other treasure to be split.
	treasureDivided.push(pirateBag)
	if(treasureToBeDivided.length > 0){
		addShare(treasureToBeDivided, treasureDivided, firstGem);
	} else {
		console.log("Treasure has been divided");
	}
}

function addGem(treasureToBeDivided, treasureDivided, firstGem, pirateBag){
	if(pirateBag.length === 0){
		pirateBag.push(treasureToBeDivided[0])
		treasureToBeDivided.splice(0, 1)
		checkIfGemCanBeAdded(treasureToBeDivided, treasureDivided, firstGem, pirateBag);
	} else {
		checkIfGemCanBeAdded(treasureToBeDivided, treasureDivided, firstGem, pirateBag);
	}
	return pirateBag;
}

function checkIfGemCanBeAdded(treasureToBeDivided, treasureDivided, firstGem, pirateBag){
	console.log(`Pirate bag contains: ${pirateBag}`);
	// check the value of the pirate bag
	let pirateBagValue = pirateBag.reduce((a, b) => Number(a) + Number(b))
	console.log(`The value of pirate bag is ${pirateBagValue}`);
	// if the bag doesn't equal first share, add a gem, otherwise return a bag
	if(pirateBagValue < firstGem){
		//for(let index = treasureToBeDivided.length - 1; index >= 0; index--){
			for(let index = 0; index < treasureToBeDivided.length; index++){
			//if(pirateBagValue + treasureToBeDivided[index] === firstGem){
			if(pirateBagValue + treasureToBeDivided[index] <= firstGem){
				console.log(`Found a gem, pushing ${treasureToBeDivided[index]} to a Pirate bag containing ${pirateBag}`);
				pirateBag.push(treasureToBeDivided[index]);
				console.log(`Removing used gem with value of ${treasureToBeDivided[index]} from the array`);
				treasureToBeDivided.splice(index, 1);
				pirateBagValue = pirateBag.reduce((a, b) =>  Number(a) + Number(b));
				console.log(`Bag total: ${pirateBagValue}`);
				if(pirateBagValue === firstGem){
					console.log(`Sending a treasure bag with ${pirateBag} over to the main function!`);
					return pirateBag;	
				} 
				else if(!(pirateBagValue + treasureToBeDivided[index] > firstGem)){
					console.log("Not enough! Trying to add another gem...");
					addGem(treasureToBeDivided, treasureDivided, firstGem, pirateBag);
				} 
			}
		}
	} 
	else {
		return pirateBag;
	}

}

function splitByTargetVal(treasureToBeDivided, firstGem){

	for(let i = treasureToBeDivided.length - 1; i > 0 && result.length === 0; i--){
		const targetVal = firstGem + treasureToBeDivided[index];
		let result = [];
		let currentBag = [];
		let currentVal = targetVal;
		while( treasureToBeDivided.length > 0){
			const itemIndex = treasureToBeDivided.findIndex((item) => item <= currentVal);
			if(itemIndex > -1){
				currentVal -= treasureToBeDivided[itemIndex];
				const gemVal = treasureToBeDivided[itemIndex];
				currentBag.push(gemVal);
				treasureToBeDivided.splice(itemIndex, 1)
			} else {
				console.log(`Unable to split into bags, cannot find matching value for ${currentVal}`);
				return [];
			}
			if(currentVal === 0){
				result.push(currentBag);
				currentBag = [];
				currentVal = targetVal;
			}
		}
		console.log('End of loop current value = ', currentVal, ' Treasure left to be divided:', treasureToBeDivided);
		return result;
	}
}

//splitTreasure([6,3,2,4,1])
//splitTreasure([3,2,7,7,14,5,3,4,9,2]); 
//splitTreasure([4,4,4])
//splitTreasure([27,7,20])

module.exports = {
	splitTreasure: splitTreasure
}



