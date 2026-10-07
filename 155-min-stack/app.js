class MinStack {
    constructor() {
        this.minArr = [];
        this.strArr = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.strArr.push(val);
        if (this.minArr.length === 0) {
            this.minArr.push(val);
        }
        else if (val <= this.getMin()) {
            this.minArr.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const poppedValue = this.strArr.pop();
        if(poppedValue == this.getMin()) {
            this.minArr.pop();
        }

        return poppedValue;
    }

    /**
     * @return {number}
     */
    top() {
        return this.strArr[this.strArr.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minArr[this.minArr.length - 1];
    }
}
module.exports = MinStack;
