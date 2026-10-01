describe.each([
    ["app", require("./app")],
    ["app_2", require("./app_2")],
    ["app_3", require("./app_3")],
])("isAnagram (%s)", (_, isAnagram) => {
    it('"racecar", "carrace"', () => {
        expect(isAnagram("racecar", "carrace")).toBe(true)
    });

    it('"jar", "jam"', () => {
        expect(isAnagram("jar", "jam")).toBe(false)
    });

    // Added by interview-add-test
    it('"a", "a"', () => {
        expect(isAnagram("a", "a")).toBe(true)
    });

    it('"a", "b"', () => {
        expect(isAnagram("a", "b")).toBe(false)
    });

    it('"abc", "abc"', () => {
        expect(isAnagram("abc", "abc")).toBe(true)
    });

    it('"aaaa", "aaaa"', () => {
        expect(isAnagram("aaaa", "aaaa")).toBe(true)
    });

    it('"abcde", "edcba"', () => {
        expect(isAnagram("abcde", "edcba")).toBe(true)
    });

    it('"a-z", "z-a"', () => {
        expect(isAnagram("abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba")).toBe(true)
    });

    it('"ab", "a"', () => {
        expect(isAnagram("ab", "a")).toBe(false)
    });

    it('"a", "ab"', () => {
        expect(isAnagram("a", "ab")).toBe(false)
    });

    it('"aa", "bb"', () => {
        expect(isAnagram("aa", "bb")).toBe(false)
    });

    it('"aab", "abb"', () => {
        expect(isAnagram("aab", "abb")).toBe(false)
    });

    it('"aacc", "ccac"', () => {
        expect(isAnagram("aacc", "ccac")).toBe(false)
    });

    it("random 1: 14 chars", () => {
        expect(isAnagram("cdcdccaaabdccb", "caacbccccabddd")).toBe(true)
    });

    it("random 2: 10 chars", () => {
        expect(isAnagram("cabcdbcacc", "ccbadabcdc")).toBe(false)
    });

    it("random 3: 5 chars", () => {
        expect(isAnagram("baada", "badaa")).toBe(true)
    });

    it("random 4: 17 chars", () => {
        expect(isAnagram("ccabaddadabaaabcd", "cabbabacdaacbddda")).toBe(false)
    });

    it("random 5: 10 chars", () => {
        expect(isAnagram("cbddcadcca", "dabcdcdacc")).toBe(true)
    });
})

// Max length is 5 * 10^4; n = 100,000 checks the O(n + m) target, not the constraints.
describe.each([
    ["app", require("./app")],
    ["app_2", require("./app_2")],
    ["app_3", require("./app_3")],
])("speed (%s)", (_, isAnagram) => {
    const n = 100_000;
    const s = Array.from({ length: n }, (_, i) => "abcdefghijklmnopqrstuvwxyz"[i % 26]).join("");

    it("n = 100,000, t is s reversed", () => {
        const t = s.split("").reverse().join("");
        const start = performance.now();
        expect(isAnagram(s, t)).toBe(true);
        expect(performance.now() - start).toBeLessThan(1000);
    });

    it("n = 100,000, only the last char differs", () => {
        const t = s.slice(0, -1) + "z";
        const start = performance.now();
        expect(isAnagram(s, t)).toBe(false);
        expect(performance.now() - start).toBeLessThan(1000);
    });
});
