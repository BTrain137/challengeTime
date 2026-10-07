class MinStack {
    constructor() {
        this.arr = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.arr.length == 0) {
            this.arr.push([val, val]);
        }
        else {
            if(val <= this.getMin()) {
                this.arr.push([val, val]);
            }
            else {
                this.arr.push([val, this.getMin()]);
            }
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.arr.pop();
    }

    /**
     * @return {number}
     */
    top() {
        const lastItem = this.arr[this.arr.length - 1];
        return lastItem[0];
    }

    /**
     * @return {number}
     */
    getMin() {
        const lastItem = this.arr[this.arr.length - 1];
        return lastItem[1];
    }
}
module.exports = MinStack;
