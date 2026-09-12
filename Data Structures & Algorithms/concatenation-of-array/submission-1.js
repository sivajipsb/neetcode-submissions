class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {

        let ans = [];
        let len = nums.length-1;
        for(let i=0; i<=len;i++){
            ans.push(nums[i]);
        }
         for(let i=0; i<=len;i++){
            ans.push(nums[i]);
        }
        return ans
        
    }
}
