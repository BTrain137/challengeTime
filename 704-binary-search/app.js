class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let end = nums.length - 1;
        let start = 0;
        let index = -1;

        while(start < (end + 1)) {
            let steps = Math.floor((end - start) / 2);
            let pointer = start + steps;
            const pointerNum = nums[pointer];
            if(target == pointerNum) {
                index = pointer;
                break;
            } else if(target > pointerNum) {
                start = pointer +  1;
            }
            else {
                end = pointer - 1;
            }

        }


        return index;

    }
}
module.exports = (...args) => new Solution().search(...args);
