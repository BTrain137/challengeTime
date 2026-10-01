---
name: interview-add-test
description: Add edge-case, random, and speed tests to a problem's app.test.js, with expected answers from a throwaway reference solution I never see.
disable-model-invocation: true
argument-hint: "[problem folder]"
---

Add more tests to the problem I'm working on. The hard part is the expected values: they have to be right, and getting them must not hand me a solution. So you compute them with a reference solution that lives only in your scratchpad and is deleted afterwards. The test file ends up with plain inputs and expected outputs, never solution logic.

My own solution files are what's being tested, not the answer key. Don't use them to produce expected values. If my code disagrees with the reference, that's a failing test, and finding those is the point.

## 1. Find the problem

- Folder in `$ARGUMENTS` → use it.
- Otherwise `git status --porcelain`: the one problem folder with changes. Several or none → ask me with AskUserQuestion.

Read `instructions.md` (statement and **constraints**) and `app.test.js` (the `describe.each` version list, the method name, and the inputs already tested).

## 2. Write the reference solution (scratchpad only)

Write `<scratchpad>/reference.js`: the simplest approach that's obviously correct, usually brute force. Don't write the optimal one. It only needs to be right on small inputs.

Before trusting it, run it on every input already in `app.test.js` and confirm it matches every expected value. A mismatch means the reference is wrong; fix it before going on.

## 3. Correctness tests

Pick inputs, run each through the reference, and copy the outputs into the test file **exactly**.

- **Edge cases from the constraints:** the smallest allowed input (empty, if the constraints allow length 0), one element, all elements equal, zero and negatives if allowed, values at the min/max bounds, the answer at the very start or very end, already-sorted and reverse-sorted input. Only the ones that make sense for this problem. Aim for about 8–12, one test per kind of case; a second test of the same kind adds nothing.
- **Common mistakes:** inputs where a typical wrong approach gives a different answer than the reference. Examples: using the same element twice, duplicate values that aren't at the start, off-by-one at either end. These catch more real bugs than the boundary cases do.
- **Random:** about 5 inputs of size 5–20, made with a fixed-seed generator in the scratchpad so a re-run gives the same cases. Paste them as literals. Choose a value range that gives a mix of answers. Values drawn from the full ±10^9 range almost never repeat, so every "has a duplicate?" case would come out `false`.

Every input must satisfy the constraints and the problem's guarantees. If it says "exactly one answer exists", don't test a case with none. Skip a case if an existing test already covers the same kind of case.

Add them inside the main `describe.each` (so every version runs them), after the current tests, under a `// Added by interview-add-test` comment. Name each `it` after its input, as the existing tests do. Long inputs get a short name, e.g. `"random 1: 15 values"`. Leave other blocks (like a sorted-input-only follow-up) alone.

## 4. Speed tests

Add a separate block after the main one, with the same version list as the main `describe.each`, labeled so a failure reads as "too slow", not "wrong":

```js
describe.each([
    ["app", require("./app")],
])("speed (%s)", (_, hasDuplicate) => {
    it("n = 100,000, all distinct", () => {
        const nums = Array.from({ length: 100_000 }, (_, i) => i);
        const start = performance.now();
        expect(hasDuplicate(nums)).toBe(false);
        expect(performance.now() - start).toBeLessThan(1000);
    });
});
```

- Use n = 100,000, or the constraints' max length if it's bigger. At that size an O(n²) solution takes seconds, while O(n log n) or O(n) takes milliseconds. If the constraints cap the length lower (Two Sum allows 1000, where O(n²) takes about 1 ms), go past the cap anyway. The speed test checks the **target complexity**, not the constraints. Add a comment saying so above the block.
- Keep the answer check. A fast but wrong result should fail too. When you report a speed failure, say whether it was the time or the answer that failed.
- Build the input inline, and pick its shape so the answer is **known by construction** (all distinct → `false`). An expression like `[n - 2, n - 1]` is fine here. Check the same shape with the reference at a small n, since it may be too slow at full size.
- Pick the worst case for a naive approach: no answer, or the answer at the very end.
- Measure with `performance.now()`. Jest's timeout can't interrupt synchronous code, so it never catches a slow solution. The 1000 ms limit is deliberately loose: at max size an O(n²) solution takes seconds and a good one takes milliseconds, so a busy machine won't make it flaky.
- 1–3 speed tests is enough.

## 5. Clean up and report

Delete `reference.js` and any generator scripts. Run `npm test -- <folder>`.

Tell me how many tests you added in each group and the pass/fail count per version. For any failure, act as the interviewer (see `CLAUDE.md`): say which kind of case fails ("the empty array", "speed: n = 100,000") and what the failure means, then ask me why my code would behave that way. Don't fix it, and don't describe the reference solution.

Everything passes → ask one interviewer follow-up from `CLAUDE.md`. Report only what the tests show. Reviewing the code for bugs the tests can't catch is `/interview-nudge`'s job.
