class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
  twoSum(nums, target) {
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (obj.hasOwnProperty(complement)) {
            return [obj[complement], i];
        }
        obj[nums[i]] = i;   // add current only after checking
    }
}
}
