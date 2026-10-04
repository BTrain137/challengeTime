---
name: interview-finish
description: Close out the current problem — write the best-known solution as app_final.js, explain it against my attempts, then commit, push, open the PR, and merge the branch.
disable-model-invocation: true
argument-hint: "[problem folder]"
---

I'm done attempting this problem and I want to see the answer: the solution an interviewer would be happy with, in a file next to my attempts, with an explanation that connects it to what I tried. Then ship the branch. Asking for this skill is me choosing to see the solution, so the "never reveal" rule in `CLAUDE.md` is lifted for this one problem.

## 1. Find the problem

- Folder in `$ARGUMENTS` → use it.
- Otherwise the problem folder from this conversation, or the one `git status --porcelain` shows changes in. Several or none → ask me with AskUserQuestion.

Read `instructions.md` (statement, constraints, **Target complexity**), `app.test.js` (every `describe.each` list and the method name), and every `app*.js` I wrote. You need my attempts to explain the final version in terms of them, not just in the abstract.

## 2. Write `app_final.js`

Never overwrite it if it exists; say so and skip to step 4.

Write the solution that meets the target complexity, in NeetCode's class shape with the same JSDoc, signature, and `module.exports` line as `app.js`. Prefer the version a strong candidate would write on a whiteboard: the standard approach, idiomatic JavaScript, no clever golf. This is the one file where comments belong. Keep them short and put them on the lines that carry the idea: the loop invariant, the reason a pointer moves, the early return. Don't narrate obvious lines.

If my best attempt is already the right algorithm, keep its structure and variable names where they're reasonable, so the diff between mine and the final reads as "what to tighten", not "start over". Reshape only what's wrong or needlessly indirect.

Add `["app_final", require("./app_final")]` to the end of **every** `describe.each` list in `app.test.js`, including speed blocks.

## 3. Prove it

Run `npm test -- <folder>`. `app_final` must pass every test, including speed. If it doesn't, the final solution is wrong; fix it before going on. My versions failing is information for the report, not something to fix.

## 4. Explain

In chat, not a file. Cover, in this order:

1. **The idea in two or three sentences.** What's the invariant, or what does each data structure remember?
2. **A trace** of one example from `instructions.md`, a few steps, enough to see the mechanism.
3. **Complexity**, time and space, with one sentence each on why.
4. **Mine vs. final.** For my closest attempt: what it got right, and each place the final differs and why that matters. Point at my line numbers. If an earlier attempt had a bug that the tests caught, name the input and the cause in one line.
5. **One follow-up question** an interviewer would ask next (a variant, a constraint change, a trade-off). Don't answer it.

## 5. Ship the branch

Same as `.claude/skills/interview-start/SKILL.md` step 2, items 1–3, except there's no next problem:

- On `master` → `git checkout -b feat/<leetcode>-<kebab title>` first; nothing is committed on `master`.
- Commit everything in the folder on the branch. Message in the repo's style, naming the problem and the approaches, e.g. `Add Valid Palindrome (125): strip-and-compare, two-pointer, and final`.
- Push, open a PR if there isn't one (`gh pr list --head <branch>`), then `gh pr merge <n> --merge --delete-branch`, then `git checkout master && git pull`.

A push, merge, or pull that fails → stop and tell me what failed; don't force anything.

Finish by telling me the PR number, that `master` is up to date, and that `/interview-start <url>` starts the next one.
