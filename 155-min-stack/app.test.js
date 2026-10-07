describe.each([
    ["app", require("./app")],
    ["app_2", require("./app_2")],
    ["app_final", require("./app_final")],
])("MinStack (%s)", (_, MinStack) => {
    it("push 1, push 2, push 0, getMin, pop, top, getMin", () => {
        const minStack = new MinStack();
        minStack.push(1);
        minStack.push(2);
        minStack.push(0);
        expect(minStack.getMin()).toBe(0);
        minStack.pop();
        expect(minStack.top()).toBe(2);
        expect(minStack.getMin()).toBe(1);
    });

    it("push 1, push 1, pop, getMin", () => {
        const minStack = new MinStack();
        minStack.push(1);
        minStack.push(1);
        minStack.pop();
        expect(minStack.getMin()).toBe(1);
    });

    it("push 0, push 5, getMin", () => {
        const minStack = new MinStack();
        minStack.push(0);
        minStack.push(5);
        expect(minStack.getMin()).toBe(0);
    });
});
