function splitTreasure(treasure){
    let treasureDivided = [];
    getTreasureValue(treasure);
    let sortedTreasure = treasure.sort((a, b) => b - a);
    treasureDivided.push(sortedTreasure[0])
    sortedTreasure.splice(0, 1)
}

function getTreasureValue(treasure){
    let totalValue = treasure.reduce((a,b) => a + b);
    console.log(totalValue);
    let divider;
    for(let i = treasure.length; i >= 0; i--){
        console.log(i);
  	    if(totalValue % i === 0 ){
            divider = i;
            
            return divider;
   	    } else {
    	    console.log("Looking for the right divider");
   	    }
        console.log(divider);
        return divider;
    }
    console.log(totalValue);
    console.log(divider);
    let treasureValue = totalValue / divider;
    console.log(treasureValue);
    return treasureValue;
}


splitTreasure([6,3,2,4,1])
