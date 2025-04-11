/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]} indices of two numbers that add up to target
 */
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return []; // No solution found
}

module.exports = twoSum;