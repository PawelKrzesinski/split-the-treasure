function splitTreasure(treasure){
	if(treasure.every( (val, item, treasure) => val === treasure[0]) ){
		console.log(`All the gems in the chest are the same, so you can split it between ${treasure.length} seekers!`);
	} else {
	const sortGems = (a, b) => b - a;
	const sortedTreasure = treasure.sort(sortGems);
	const firstGem = sortedTreasure.shift();
	const treasureDivided = [];
	treasureDivided.push([firstGem]);
	const treasureToBeDivided = [...treasure];
	addShare(treasureToBeDivided, treasureDivided);
	console.log(treasureDivided);
}}


function addShare(treasureToBeDivided, treasureDivided){
	console.log(treasureToBeDivided);
	const remainingGems = [...treasureToBeDivided]
	console.log("Initializing a pirate bag!");
	const pirateBag = [];
	pirateBag.push(remainingGems.shift());
	console.log("Adding biggest possible gem in to the bag");
	addGem(treasureToBeDivided, treasureDivided, pirateBag);
}


function addGem(treasureToBeDivided, treasureDivided, pirateBag){
	const pirateBagValue = pirateBag.reduce((a, b) => a + b);
	console.log(`Calculating total value of gems in the bag. Result: ${pirateBagValue}`);
	if(!(pirateBagValue >= treasureDivided[0][0])){
		console.log(`Checking if gems in the bag are worth as much as first share.`);
		treasureToBeDivided.forEach( (gem, pos) => {
			console.log(gem, pos);
			if(!(pirateBagValue + gem > treasureDivided[0][0])){
				pirateBag.push(gem);
				treasureToBeDivided.splice(pos, 1)
				if(pirateBag.reduce((a, b) => a + b) === treasureDivided[0][0]) {
					console.log("haha");
					treasureDivided.push(pirateBag);
					addShare();
				} else {
					addGem();
					
				}
			}

		});
	} else if(pirateBagValue === treasureDivided[0][0]){
		treasureDivided.push(pirateBag);
		addShare();
	} else {
		throw 'Value of the bag is higher than the first share!'
	}
}








splitTreasure([2, 10, 2, 4, 2, 9, 3, 5, 1, 2]);








		// sortedTreasure.forEach( gem => {
		// 	if(gem === firstGem){
		// 		treasureDivided.push([gem])
		// 	}
		// })