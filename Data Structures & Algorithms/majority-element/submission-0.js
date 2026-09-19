class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {

        let majorityElement = Math.ceil(nums.length/2);
            let object = {}
        for( const n of nums){
            object[n] =  (object[n] || 0)+ 1
        }

        console.log(object)
        // for(let i=0; i<nums.length;i++){

        // }

        for (const key in object) {
                if(object[key] >= majorityElement){
                    return key
                }
    // "5" 4
    // "1" 3
        }
    }
}
