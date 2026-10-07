describe.each([
    ["app", require("./app")],
    ["app_final", require("./app_final")],
])("isValid (%s)", (_, isValid) => {
    it("[]", () => {
        expect(isValid("[]")).toBe(true)
    });

    it("([{}])", () => {
        expect(isValid("([{}])")).toBe(true)
    });

    it("[(])", () => {
        expect(isValid("[(])")).toBe(false)
    });

    // Added by interview-add-test
    it("]", () => {
        expect(isValid("]")).toBe(false)
    });

    it("(", () => {
        expect(isValid("(")).toBe(false)
    });

    it("()[]{}", () => {
        expect(isValid("()[]{}")).toBe(true)
    });

    it("{[]}", () => {
        expect(isValid("{[]}")).toBe(true)
    });

    it("(((([][])({()}))))", () => {
        expect(isValid("(((([][])({()}))))")).toBe(true)
    });

    it("(]", () => {
        expect(isValid("(]")).toBe(false)
    });

    it("))", () => {
        expect(isValid("))")).toBe(false)
    });

    it(")(", () => {
        expect(isValid(")(")).toBe(false)
    });

    it("([)]", () => {
        expect(isValid("([)]")).toBe(false)
    });

    it("(()", () => {
        expect(isValid("(()")).toBe(false)
    });

    it("())", () => {
        expect(isValid("())")).toBe(false)
    });

    it("[](", () => {
        expect(isValid("[](")).toBe(false)
    });

    it("random 1: 14 chars", () => {
        expect(isValid("{{[()]}}(){[]}")).toBe(true)
    });

    it("random 2: 10 chars", () => {
        expect(isValid("{}{(()){(}")).toBe(false)
    });

    it("random 3: 10 chars", () => {
        expect(isValid("([](()))[]")).toBe(true)
    });

    it("random 4: 16 chars", () => {
        expect(isValid("{([((]]))])}()()")).toBe(false)
    });

    it("random 5: 16 chars", () => {
        expect(isValid("{[(){}]()}(()())")).toBe(true)
    });
});

// Constraints cap s.length at 1000; these go past it to check the O(n) target complexity.
describe.each([
    ["app", require("./app")],
    ["app_final", require("./app_final")],
])("speed (%s)", (_, isValid) => {
    it("n = 100,000, one deep nest", () => {
        const s = "(".repeat(50_000) + ")".repeat(50_000);
        const start = performance.now();
        expect(isValid(s)).toBe(true);
        expect(performance.now() - start).toBeLessThan(1000);
    });

    it("n = 300,000, mixed deep nest", () => {
        const s = "([{".repeat(50_000) + "}])".repeat(50_000);
        const start = performance.now();
        expect(isValid(s)).toBe(true);
        expect(performance.now() - start).toBeLessThan(1000);
    });

    it("n = 100,000, all open", () => {
        const s = "(".repeat(100_000);
        const start = performance.now();
        expect(isValid(s)).toBe(false);
        expect(performance.now() - start).toBeLessThan(1000);
    });
});
