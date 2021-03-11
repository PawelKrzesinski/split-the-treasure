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

	function addShare(){
		sortedTreasure.forEach( gem => {
			if(gem === firstGem){
				treasureDivided.push([gem])
			}
		})
		const pirateBag = [];
		pirateBag.push(treasureToBeDivided.shift());
		function addGem(){
			const pirateBagValue = pirateBag.reduce((a, b) => a + b);
			if(!(pirateBagValue > treasureDivided[0][0])){
				treasureToBeDivided.forEach( gem => {
					console.log(treasureToBeDivided);
					if(!(pirateBagValue + gem > treasureDivided[0][0])){
						pirateBag.push(gem);
						if(pirateBag.reduce((a, b) => a + b) === treasureDivided[0][0]) {
							treasureDivided.push(pirateBag);
							addShare();
						} else {
							addGem();
						}
					}
				});
			}
		}
		addGem();
	}
	addShare();
	console.log(treasureDivided);
}}
splitTreasure([2, 10, 2, 4, 2, 9, 3, 5, 10, 1, 2]);