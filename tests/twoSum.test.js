const twoSum = require('../src/twoSum');

describe('twoSum', () => {
    test('returns correct indices for valid input', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });

    test('returns empty array for no solution', () => {
        expect(twoSum([1, 2, 3], 10)).toEqual([]);
    });

    test('handles negative numbers', () => {
        expect(twoSum([-1, -2, -3], -5)).toEqual([1, 2]);
    });

    test('handles single solution case', () => {
        expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
    });
});