# Two Sum — explained

Source: From knowledge · 2026-09-29

## The problem
Given an array `nums` and a `target`, return the indices of the two different elements that add up to `target`.

## Key insight
For each number, you already know exactly which number you need: its **complement**, `target - nums[i]`. So the problem becomes "have I seen the complement before?" A hash map answers that in O(1), which turns the O(n²) search into a single O(n) pass.

## Approaches
| Approach | Idea | Time | Space |
|---|---|---|---|
| Brute force | Check every pair `(i, j)` with two nested loops | O(n²) | O(1) |
| Sort + two pointers | Sort (value, index) pairs; move pointers inward from both ends based on whether the sum is too small or too big | O(n log n) | O(n) (to keep original indices) |
| Hash map, two passes | Pass 1: store every value → index. Pass 2: look up each complement (skip if it's the same index) | O(n) | O(n) |
| **Hash map, one pass** | Check for the complement, *then* store the current number | **O(n)** | **O(n)** |

## Optimal solution
```js
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numToIndex = new Map(); // value -> index, for everything we've passed
        for (let i = 0; i < nums.length; i += 1) {
            const complement = target - nums[i];
            if (numToIndex.has(complement)) {
                // The complement came earlier, so its index is the smaller one
                return [numToIndex.get(complement), i];
            }
            // Store AFTER checking, so nums[i] can't pair with itself
            numToIndex.set(nums[i], i);
        }
        return []; // unreachable: the problem guarantees one answer
    }
}
```

## Walkthrough
Example 1: `nums = [3,4,5,6]`, `target = 7`

| `i` | `nums[i]` | complement | map before | complement in map? | action |
|---|---|---|---|---|---|
| 0 | 3 | 7 − 3 = 4 | `{}` | no | store `3 → 0` |
| 1 | 4 | 7 − 4 = 3 | `{3 → 0}` | **yes, index 0** | return `[0, 1]` |

Output `[0, 1]` ✓. The loop never even looks at `5` or `6`.

## Your solution
`app_1.v2.js` **is the optimal solution**, line for line: a one-pass `Map`, checking for the complement before inserting, and returning `[earlier index, i]` so the smaller index comes first. O(n) time, O(n) space.

Two small things an interviewer might mention:
- There's no `return` after the loop. That's fine given the guarantee, but a `return []` shows you thought about the no-answer case.
- You used `Map` with `.has()` instead of a plain object with `if (obj[complement])`. Good call, see the pitfalls below.

Compared with `app_1.v1.js` (nested loops, O(n²)): the inner loop's whole job was *searching* for the complement; the map replaces that search with an O(1) lookup, trading O(n) memory for time.

## Edge cases and pitfalls
- **Using the same element twice.** If you store before checking, `nums = [3,2,4], target = 6` finds `3` in the map at `i = 0` and returns `[0, 0]`. Checking first prevents this.
- **Duplicates.** `[5,5], target = 10` works: the first `5` is stored, and the second finds it → `[0, 1]`. If a duplicate overwrites an earlier index, that's still fine, because you'd have returned already if it mattered.
- **Index 0 is falsy.** With a plain object, `if (seen[complement])` fails when the complement's index is `0`. Use `Map.has()`, `in`, or `!== undefined`.
- **Negatives and zero** need no special handling; `target - nums[i]` works for any integers.
- **Sorting the original array** destroys the indices you need to return. (This was the bug in the first attempt.)

## Interview follow-ups
- **"The input is sorted."** (Two Sum II, #167) → two pointers from both ends: O(n) time, **O(1) space**.
- **"Find all pairs" / "count the pairs."** → keep going instead of returning; with duplicates, store counts in the map instead of indices.
- **"Three numbers that sum to 0."** (3Sum, #15) → sort, fix one number, run two pointers on the rest: O(n²).
- **"Design a class with `add(n)` and `find(target)`."** (Two Sum III, #170) → a map of counts; trade off whether `add` or `find` is the fast one.
- **"The numbers are in a BST."** (Two Sum IV, #653) → same complement idea with a set during traversal, or in-order traversal + two pointers.
- **"What if memory is tight?"** → sort + two pointers (O(n log n), with an index-preserving copy) or brute force (O(1) space).

## Follow-up deep dive: sorted input, O(1) space
Code: `app_1.v3.js` (Two Sum II, #167).

**Key insight:** in a sorted array, the sum of the two ends tells you which end is useless. Put `left` on the smallest value and `right` on the largest:
- `sum < target` → `numbers[left]` is too small even when paired with the **largest** remaining number, so no partner can work for it. Drop it: `left++`.
- `sum > target` → `numbers[right]` is too big even when paired with the **smallest** remaining number. Drop it: `right--`.
- `sum === target` → done.

Each step throws away one number that provably can't be in the answer, so the pointers never skip past it. At most n steps: **O(n) time, O(1) space**, with no map.

Walkthrough: `numbers = [1,3,4,6,8,11]`, `target = 10`

| `left` | `right` | values | sum | action |
|---|---|---|---|---|
| 0 | 5 | 1 + 11 | 12 | too big → `right--` |
| 0 | 4 | 1 + 8 | 9 | too small → `left++` |
| 1 | 4 | 3 + 8 | 11 | too big → `right--` |
| 1 | 3 | 3 + 6 | 9 | too small → `left++` |
| 2 | 3 | 4 + 6 | 10 | found → return `[2, 3]` |

**Why it needs sorted input:** the "drop it" logic depends on `right` being the biggest and `left` the smallest remaining value. On unsorted input, sorting first costs O(n log n) and loses the original indices unless you copy (value, index) pairs, which is O(n) space again. So for the original, unsorted problem, the hash map is still the best choice.
