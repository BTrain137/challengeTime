describe.each([
    ["app", require("./app")],
    ["app_2", require("./app_2")],
    ["app_3", require("./app_3")],
    ["app_4", require("./app_4")],
    ["app_final", require("./app_final")],
])("isPalindrome (%s)", (_, isPalindrome) => {
    it('"Was it a car or a cat I saw?"', () => {
        expect(isPalindrome("Was it a car or a cat I saw?")).toBe(true)
    });

    it('"tab a cat"', () => {
        expect(isPalindrome("tab a cat")).toBe(false)
    });
    // Added by interview-add-test
    it('"aa"', () => {
        expect(isPalindrome("aa")).toBe(true)
    });

    it('"a"', () => {
        expect(isPalindrome("a")).toBe(true)
    });

    it('"?!"', () => {
        expect(isPalindrome("?!")).toBe(true)
    });

    it('" "', () => {
        expect(isPalindrome(" ")).toBe(true)
    });

    it('"Aa"', () => {
        expect(isPalindrome("Aa")).toBe(true)
    });

    it('"ab"', () => {
        expect(isPalindrome("ab")).toBe(false)
    });

    it('"a?a"', () => {
        expect(isPalindrome("a?a")).toBe(true)
    });

    it('"0P"', () => {
        expect(isPalindrome("0P")).toBe(false)
    });

    it('"1a1"', () => {
        expect(isPalindrome("1a1")).toBe(true)
    });

    it('"race a car"', () => {
        expect(isPalindrome("race a car")).toBe(false)
    });

    it('"A man, a plan, a canal: Panama"', () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true)
    });

    it('"12321"', () => {
        expect(isPalindrome("12321")).toBe(true)
    });

    it('"1231"', () => {
        expect(isPalindrome("1231")).toBe(false)
    });

    it('"ab@ba"', () => {
        expect(isPalindrome("ab@ba")).toBe(true)
    });

    it('random 1: "?aa,b?b"', () => {
        expect(isPalindrome("?aa,b?b")).toBe(false)
    });

    it('random 2: ",1ab1"', () => {
        expect(isPalindrome(",1ab1")).toBe(false)
    });

    it('random 3: ",a,a?"', () => {
        expect(isPalindrome(",a,a?")).toBe(true)
    });

    it('random 4: ",?,1,"', () => {
        expect(isPalindrome(",?,1,")).toBe(true)
    });

    it('random 5: "?1b,,"', () => {
        expect(isPalindrome("?1b,,")).toBe(false)
    });
});

// Max length is 1000; n = 100,000 checks the O(n) target, not the constraints.
describe.each([
    ["app", require("./app")],
    ["app_2", require("./app_2")],
    ["app_3", require("./app_3")],
    ["app_4", require("./app_4")],
    ["app_final", require("./app_final")],
])("speed (%s)", (_, isPalindrome) => {
    const n = 100_000;

    it("n = 100,000, palindrome", () => {
        const s = Array.from({ length: n }, (_, i) => "abc"[Math.min(i, n - 1 - i) % 3]).join("");
        const start = performance.now();
        expect(isPalindrome(s)).toBe(true);
        expect(performance.now() - start).toBeLessThan(1000);
    });

    it("n = 100,000, only the last char differs", () => {
        const s = Array.from({ length: n }, (_, i) => "abc"[Math.min(i, n - 1 - i) % 3]).join("").slice(0, -1) + "z";
        const start = performance.now();
        expect(isPalindrome(s)).toBe(false);
        expect(performance.now() - start).toBeLessThan(1000);
    });

    it("n = 100,000, every other char is punctuation", () => {
        const s = Array.from({ length: n }, (_, i) => (i % 2 ? "?" : "a")).join("");
        const start = performance.now();
        expect(isPalindrome(s)).toBe(true);
        expect(performance.now() - start).toBeLessThan(1000);
    });
});
