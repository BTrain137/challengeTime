---
name: interview-instructions
description: Turn a problem screenshot or saved HTML into the problem folder's instructions markdown.
disable-model-invocation: true
argument-hint: "[path to .html file or problem folder]"
---

Transcribe a coding problem (NeetCode / LeetCode) from a screenshot or an HTML file into markdown in its problem folder, so the interviewer skills and I can read it.

## 1. Get the source

- **Screenshot** in my message → read it from the image.
- **HTML file** in `$ARGUMENTS` or my message → read it; strip tags to get the text.
- Neither → ask me for a screenshot or HTML file, and stop.

Transcribe **only the problem**: title, difficulty, description, examples, constraints, and the recommended time/space complexity if shown. Leave out everything else on the page: my code in the editor, **Topics**, **Hints**, **Company Tags**, and solution text. Those are spoilers; the interviewer gives hints, not the page.

HTML exports often lack the title; take it from the screenshot, the page, or ask me.

## 2. Pick the folder

Folders are named `NN-kebab-title`, where `NN` is the LeetCode problem number, zero-padded to two digits (`01-two-sum`, `53-maximum-subarray`). NeetCode renames problems (Two Sum is `two-integer-sum` there), so match on the problem itself, not the slug.

In order:
1. A folder in `$ARGUMENTS` → use it.
2. An existing folder holds the same problem: check folder names and their `instructions.md`. Use it.
3. `git status` shows me working in one problem folder and the problem matches → use it.
4. Several candidates, or you're unsure → ask me with AskUserQuestion, listing them plus "New folder".
5. No match → create a new folder. If you don't know the LeetCode number for sure, ask me for it.

## 3. Pick the filename

- No `instructions.md` in the folder → `instructions.md`.
- It exists → `instructions_v2.md`; if that exists too, `instructions_v3.md`, and so on. Never overwrite.

## 4. Write it

~~~markdown
# <Title>

Difficulty: <Easy|Medium|Hard> · Source: <NeetCode|LeetCode>

<Description. Variables and expressions in `backticks`.>

## Examples

**Example 1:**
```
Input: nums = [3,4,5,6], target = 7
Output: [0,1]
Explanation: nums[0] + nums[1] == 7, so we return [0, 1].
```

## Constraints

- `2 <= nums.length <= 1000`

## Target complexity

O(n) time, O(n) space.
~~~

Omit a section the source doesn't have. Done when every example and every constraint in the source is present with its numbers exactly as shown. Re-check digits, signs, and commas against the source, since screenshots misread easily.

## 5. Report

If the source was an HTML file, delete it once the markdown is written and checked: it holds the spoilers left out in step 1. Then tell me the path you wrote.
