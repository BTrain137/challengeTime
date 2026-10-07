class MinStack {
    constructor() {
        // Each entry is [val, min of everything at or below it].
        this.arr = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        // Empty stack: val is the min. Otherwise the new min is the smaller of val and the old min.
        const min = this.arr.length === 0 ? val : Math.min(val, this.getMin());
        this.arr.push([val, min]);
    }

    /**
     * @return {void}
     */
    pop() {
        // The entry below already remembers its own min, so nothing to recompute.
        this.arr.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.arr.length - 1][0];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.arr[this.arr.length - 1][1];
    }
}
module.exports = MinStack;
