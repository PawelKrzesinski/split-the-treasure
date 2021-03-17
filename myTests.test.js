const { test } = require('@jest/globals');
const treasureSplittingApp = require('./app1')

test("When all gems are same value splits evenly", () => {
	const result = treasureSplittingApp.splitTreasure([4,4,4]);
	expect(result.length).toEqual(3);
	expect(result[0]).toContain(4);
	expect(result[1]).toContain(4);
	expect(result[2]).toContain(4);
});

test("splitTreasure [27,7,20]", () => {

	const result = treasureSplittingApp.splitTreasure([27,7,20]);
	expect(result.length).toEqual(2);
	expect(result[0]).toContain([27]);
	expect(result[1]).toContain([20, 7]);

})

