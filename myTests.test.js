const { test } = require('@jest/globals');
const treasureSplittingApp = require('./app1')

test("When all gems are same value splits evenly", () => {
	const result = treasureSplittingApp.splitTreasure([4, 4, 4]);
	console.log(`The result is ${result}`);
	expect(result.length).toEqual(3);
	expect(result[0]).toContain(4);
	expect(result[1]).toContain(4);
	expect(result[2]).toContain(4);
});

test("splitTreasure 27,7,20", () => {
	const result = treasureSplittingApp.splitTreasure([27, 7, 20]);
	console.log(result);
	expect(result.length).toEqual(2);
	expect(result[0]).toContain(27);
	expect(result[1]).toContain(20, 7);
})

test("splitTreasure 3,2,7,7,14,5,3,4,9,2", () => {
	const result = treasureSplittingApp.splitTreasure([3, 2, 7, 7, 14, 5, 3, 4, 9, 2]);
	console.log(result);
	expect(result.length).toEqual(4);
	expect(result[0]).toContain(14);
	expect(result[1]).toContain(9, 5);
	expect(result[2]).toContain(7, 7);
	expect(result[3]).toContain(4, 3, 3, 2, 2);
})

test("splitTreasure 6,3,2,4,1", () => {
	const result = treasureSplittingApp.splitTreasure([6, 3, 2, 4, 1]);
	console.log(result);
	expect(result.length).toEqual(2);
	expect(result[0]).toContain(6, 2);
	expect(result[1]).toContain(4, 3, 1);
})
