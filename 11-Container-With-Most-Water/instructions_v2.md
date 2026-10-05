# Container With Most Water

Difficulty: Medium · Source: NeetCode

You are given an integer array `heights` where `heights[i]` represents the height of the `i`th bar.

You may choose any two bars to form a container. Return the *maximum* amount of water a container can store.

## Examples

**Example 1:**

![](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/77f004c6-e773-4e63-7b99-a2309303c700/public)

```
Input: height = [1,7,2,5,4,7,3,6]
Output: 36
Explanation: The bars at indices 1 and 7 have heights 7 and 6. The container has width 7 - 1 = 6 and height min(7, 6) = 6, so it can store 6 * 6 = 36 units of water. This is the maximum possible area.
```

**Example 2:**
```
Input: height = [2,2,2]
Output: 4
```

## Constraints

- `2 <= height.length <= 100,000`
- `0 <= height[i] <= 10,000`

## Target complexity

O(n) time, O(1) space.
