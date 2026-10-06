# Longest Substring Without Repeating Characters

Difficulty: Medium · Source: NeetCode

Given a string `s`, find the *length of the longest substring* without duplicate characters.

A **substring** is a contiguous sequence of characters within a string.

## Examples

**Example 1:**
```
Input: s = "zxyzxyz"
Output: 3
Explanation: The string "xyz" is the longest without duplicate characters.
```

**Example 2:**
```
Input: s = "xxxx"
Output: 1
```

## Constraints

- `0 <= s.length <= 50,000`
- `s` may consist of printable ASCII characters.

## Target complexity

O(n) time, O(m) space (m = number of unique characters).
