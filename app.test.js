
test('Not splitable when there are no seekers', () => {
	let numberOfSeekers = 0
	let treasure = [1]
	let result = isSplitable(numberOfSeekers,treasure)
	expect(result).toEqual(false)
})
test('Seekers should be a positive number', () => {
	let numberOfSeekers = -99
	let treasure = [1]
	let result = isSplitable(numberOfSeekers,treasure)
	expect(result).toEqual(false)
})
test('No splitable if no gems', () => {
	let numberOfSeekers = 2
	let treasure = []
	let result = isSplitable(numberOfSeekers,treasure)
	expect(result).toEqual(false)
})
test('Not splitable more seekers than gems', () => {
	let numberOfSeekers = 10
	let treasure = [1,4]
	let result = isSplitable(numberOfSeekers,treasure)
	expect(result).toEqual(false)
})