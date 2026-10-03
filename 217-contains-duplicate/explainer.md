# Contains Duplicate — explained

Source: From knowledge · 2026-09-30

## The problem
Return `true` if any value appears more than once in `nums`, otherwise `false`.

## Key insight
You don't need to compare every pair. Walk the array once and remember what you've seen in a hash set. The first number that's already in the set is a duplicate.

## Approaches
| Approach | Idea | Time | Space |
|---|---|---|---|
| Brute force | Compare every pair `i < j` | O(n²) | O(1) |
| Sort | Sort, then duplicates sit next to each other; compare neighbors | O(n log n) | O(1) extra if sorting in place (mutates input), O(n) if you copy first |
| Hash set (optimal) | One pass; check the set before adding each number | O(n) | O(n) |

## Optimal solution
```js
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for (const num of nums) {
            if (seen.has(num)) return true; // seen it before → duplicate
            seen.add(num);                  // remember it for later numbers
        }
        return false; // loop ended with no repeat (also covers [])
    }
}
```

A one-liner also works: `return new Set(nums).size !== nums.length;`. It always processes the whole array, though, while the loop stops at the first duplicate.

## Walkthrough
Example 1: `nums = [1, 2, 3, 3]`

| i | num | `seen` before | `seen.has(num)`? | action |
|---|---|---|---|---|
| 0 | 1 | {} | no | add 1 |
| 1 | 2 | {1} | no | add 2 |
| 2 | 3 | {1, 2} | no | add 3 |
| 3 | 3 | {1, 2, 3} | **yes** | return `true` |

Output: `true` ✓

## Your solution
You wrote two versions and both pass.

**`app.js`, sort and compare neighbors:** O(n log n) time. It's correct, and it's the natural step up from brute force. Two catches:
- `nums.sort(...)` sorts the **caller's array** in place. `sortedNums` is the same array, not a copy. Use `[...nums].sort(...)` or `nums.toSorted(...)` to avoid that, at the cost of O(n) space, which removes sorting's only advantage over the set.
- `==` should be `===`. It doesn't matter for integers, but strict equality is the habit interviewers expect.

**`app_2.js`, Map:** O(n) time, O(n) space. Same complexity as the optimal solution, so the **approach is optimal**. Some cleanup would make it read like the version above:
- **Use a `Set`.** `map.set(num)` stores `num → undefined`; you never use the value. A `Set` says "I only care whether I've seen it."
- **Check before reading, not after.** Your stop check is at the bottom of the loop, so the body always runs at least once. On `[]` it reads `nums[0]` (`undefined`) before line 16 stops it. It still returns `false`, so it's harmless here, but it's the same off-by-one family you fixed with `>=`. A `for` loop checks `i < length` *before* each pass, so this can't happen.
- **`continueLoop` never changes**, so it's really `while (true)`. When a variable never changes, you probably want a different loop shape.

## Edge cases and pitfalls
- `[]` → `false`. The constraints allow length 0.
- One element → `false`.
- The duplicate isn't adjacent: `[3, 1, 2, 3]`. This breaks "compare neighbors" if you forget to sort first.
- Negatives and zero: a hash set handles them the same as positives. Watch out for tricks like using values as array indices.
- Sorting mutates the input (see above).
- Off-by-one: reading `nums[length]` gives `undefined` in JS, not an error, so the bug can stay hidden.

## Interview follow-ups
- **"Do it in O(1) extra space."** Sort in place, which costs O(n log n) time and mutates the input, or accept O(n²) brute force. You can't get O(n) time and O(1) space for general integers.
- **"Return the duplicate value / all duplicates."** Same set walk; return `num` instead of `true`, or collect them into a second set.
- **"Duplicates within distance k"** (Contains Duplicate II, #219). Keep a map of `num → last index`, or a sliding-window set of size k.
- **"Values within t of each other, within distance k"** (Contains Duplicate III, #220). Bucket by value (`Math.floor(num / (t + 1))`) inside a sliding window.
- **"Values are 1..n and you can't use extra space"** (#287 territory). Use the index-marking or cycle-detection (Floyd) tricks.
