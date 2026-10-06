describe.each([
    ["app_2", require("./app_2")],
    ["app_final", require("./app_final")],
])("lengthOfLongestSubstring (%s)", (_, lengthOfLongestSubstring) => {
    it('"zxyzxyz"', () => {
        expect(lengthOfLongestSubstring("zxyzxyz")).toBe(3)
    });

    it('"xxxx"', () => {
        expect(lengthOfLongestSubstring("xxxx")).toBe(1)
    });

    // Added by interview-add-test
    it('""', () => {
        expect(lengthOfLongestSubstring("")).toBe(0)
    });

    it('"a"', () => {
        expect(lengthOfLongestSubstring("a")).toBe(1)
    });

    it('"ab"', () => {
        expect(lengthOfLongestSubstring("ab")).toBe(2)
    });

    it('"aab"', () => {
        expect(lengthOfLongestSubstring("aab")).toBe(2)
    });

    it('"abbcd"', () => {
        expect(lengthOfLongestSubstring("abbcd")).toBe(3)
    });

    it('"abcdd"', () => {
        expect(lengthOfLongestSubstring("abcdd")).toBe(4)
    });

    it('"abba"', () => {
        expect(lengthOfLongestSubstring("abba")).toBe(2)
    });

    it('"dvdf"', () => {
        expect(lengthOfLongestSubstring("dvdf")).toBe(3)
    });

    it('"pwwkew"', () => {
        expect(lengthOfLongestSubstring("pwwkew")).toBe(3)
    });

    it('"a b c"', () => {
        expect(lengthOfLongestSubstring("a b c")).toBe(3)
    });

    it('"aA"', () => {
        expect(lengthOfLongestSubstring("aA")).toBe(2)
    });

    it('"!@#!@"', () => {
        expect(lengthOfLongestSubstring("!@#!@")).toBe(3)
    });

    it('random 1: 14 chars', () => {
        expect(lengthOfLongestSubstring("dfeeedaabbfeec")).toBe(3)
    });

    it('random 2: 9 chars', () => {
        expect(lengthOfLongestSubstring("afffcbfae")).toBe(5)
    });

    it('random 3: 20 chars', () => {
        expect(lengthOfLongestSubstring("eacdabdebdadddefebfc")).toBe(4)
    });

    it('random 4: 19 chars', () => {
        expect(lengthOfLongestSubstring("afbacaafbbdededdaba")).toBe(4)
    });

    it('random 5: 19 chars', () => {
        expect(lengthOfLongestSubstring("fbebcaaacdfcccdcaec")).toBe(4)
    });
});

// Speed tests check the O(n) target, so n goes past the 50,000 length cap.
describe.each([
    ["app_2", require("./app_2")],
    ["app_final", require("./app_final")],
])("speed (%s)", (_, lengthOfLongestSubstring) => {
    it("n = 100,000, all 95 printable chars cycling", () => {
        const s = Array.from({ length: 100_000 }, (_, i) => String.fromCharCode(32 + (i % 95))).join("");
        const start = performance.now();
        expect(lengthOfLongestSubstring(s)).toBe(95);
        expect(performance.now() - start).toBeLessThan(1000);
    });

    it("n = 100,000, all the same char", () => {
        const s = "a".repeat(100_000);
        const start = performance.now();
        expect(lengthOfLongestSubstring(s)).toBe(1);
        expect(performance.now() - start).toBeLessThan(1000);
    });
});
