---
name: interview-try-again
description: Start a fresh attempt at the current problem — a new empty app_N.js wired into the tests, plus a test for any input from our conversation that broke my last attempt.
disable-model-invocation: true
argument-hint: "[problem folder] [input to add as a test]"
---

I've just worked out (usually with your hint) that my solution is wrong or could be better, and I want to try again from scratch. Give me a clean file to write it in, and turn the input that exposed the problem into a test, so the old version fails it and the new one has to pass it.

You set up files; I write the solution. Don't put any solution logic, hints, or comments in the new file.

## 1. Find the problem

- Folder in `$ARGUMENTS` → use it.
- Otherwise, the problem folder we've been working in during this conversation.
- Neither is clear → `git status --porcelain` for the one problem folder with changes. Several or none → ask me with AskUserQuestion.

Read `instructions.md` (for the expected answers) and `app.test.js` (the `describe.each` version lists, the method name, and the inputs already tested).

## 2. Create the new file

Name it after the highest existing version plus one: `app.js` → `app_2.js`, `app_2.js` → `app_3.js`. Never overwrite an existing file.

Its content is NeetCode's empty starter: the class from `app.js` with each method body emptied to `{}`, keeping the JSDoc and signature, then the same `module.exports` line. Copy the signature, not my code.

```js
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {}
}
module.exports = (...args) => new Solution().isAnagram(...args);
```

Add `["app_N", require("./app_N")]` to the end of **every** `describe.each` list in `app.test.js`, including any speed block, so the new version runs everything the old ones do.

## 3. Add the test that broke me

Find the input to test:
- An input in `$ARGUMENTS` → that one.
- Otherwise, the input from this conversation that exposed the problem: a case you asked me to trace, or one I tried, where my code gave the wrong answer. If several came up, add each one.
- None came up (I'm retrying for a better complexity, not a bug) → skip this step and say so.

Only use inputs from the conversation. Coming up with new edge cases is my job, or `/interview-add-test`'s.

The expected value comes from the problem statement, not from any of my solution files. These inputs are small, so work the answer out by hand and check it against `instructions.md`. Skip any input that an existing test already covers.

Add it inside the main `describe.each`, after the current tests, named after its input like the existing ones:

```js
    it('"aa", "bb"', () => {
        expect(isAnagram("aa", "bb")).toBe(false)
    });
```

## 4. Check and report

Run `npm test -- <folder>`. What should happen:
- The new version fails every test on the assertion (its method returns `undefined`). A `require` error or "is not a function" is a wiring bug, so fix it.
- The version that broke fails the new test. If it passes, the test doesn't catch the bug. Tell me, and check that the input and expected value match what we talked about.

Tell me the new file's name and the command to run just that version:

```sh
npm test -- <folder> -t "app_N" --watch
```

Then ask me to talk through the approach I'm going to try before I code it. Don't hint beyond what we already discussed.
