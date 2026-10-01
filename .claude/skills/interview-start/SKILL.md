---
name: interview-start
description: Start a new problem from a NeetCode link — folder, instructions, starter app.js, and a test file built from the examples.
disable-model-invocation: true
argument-hint: "<neetcode.io problem URL>"
---

Set up a problem folder like `01-two-sum/` from a NeetCode URL: `instructions.md`, an `app.js` holding only NeetCode's empty starter code, and an `app.test.js` with one test per example. I solve it; you never fill in the method body.

## 1. Get the page

No URL in `$ARGUMENTS` → ask me for one, and stop.

Save the page to your scratchpad and run the extractor:

```sh
curl -sL "<url>" -o <scratchpad>/problem.html
node .claude/skills/interview-start/extract.js <scratchpad>/problem.html
```

It prints JSON: `title`, `leetcode` (number), `difficulty`, `description` (with examples and constraints), `complexity`, `starterJs`. The raw page also holds solutions, hints, and the article. **Use only the extractor's output.** Don't read, grep, or quote the HTML yourself.

**Exit 1 (`NO_PROBLEM`) means a login wall or premium problem.** Fall back to the Playwright MCP:
1. Navigate to the URL. If it shows a sign-in page, ask me to sign in in that browser window, then wait for me to confirm.
2. Evaluate `document.documentElement.outerHTML` and write the result to `<scratchpad>/problem.html`, then rerun the extractor.
3. Still `NO_PROBLEM` → snapshot the page and read only the problem panel: title, description, examples, constraints. Switch the editor's language to JavaScript to read the starter code. Never open the Solution, Hints, or Video tabs.

No Playwright tools available → tell me to add the Playwright MCP to this project (or send a screenshot), and stop.

## 2. Write the instructions

Follow `.claude/skills/interview-instructions/SKILL.md` steps 2–4 (folder, filename, format), using the extractor output as the source. Step 1 is done; the extractor already dropped Topics, Hints, and Company Tags.

- Folder: `<leetcode>-<kebab title>`, e.g. `217-contains-duplicate`. That skill's folder rules apply, including asking me when an existing folder might be the same problem.
- Fence examples as plain ```` ``` ````, not ```` ```java ````. Fold `Explanation:` lines into the example block.
- `complexity` text → the **Target complexity** section, shortened to e.g. `O(n) time, O(n) space.`

## 3. Write `app.js`

Only when the folder has no `app.js` (otherwise use `app_2.js`, `app_3.js`, … and add it to the test's `describe.each` list, per `CLAUDE.md`).

`starterJs` verbatim, then the export line from `CLAUDE.md` with the starter's method name:

```js
<starterJs>
module.exports = (...args) => new Solution().<methodName>(...args);
```

The method body stays empty. Don't add comments, hints, or helper code inside the class.

## 4. Write `app.test.js`

Match `01-two-sum/app.test.js`: one `describe.each` over the versions, one `it` per example. Name each test after its input.

```js
describe.each([
    ["app", require("./app")],
])("<methodName> (%s)", (_, <methodName>) => {
    it("[1,2,3,3]", () => {
        expect(<methodName>([1, 2, 3, 3])).toBe(true)
    });
});
```

- Each `Input:` argument becomes a call argument, in the starter's parameter order. Each `Output:` becomes the expected value. Copy the numbers exactly.
- `toBe` for primitives, `toEqual` for arrays/objects.
- The description says "any order" → sort both sides before comparing.
- Starter takes or returns `ListNode` / `TreeNode` → add a small builder (array → list/tree) and its reverse at the top of the test file, and test against plain arrays.

Use only the examples from the description. Don't invent edge-case tests; finding edge cases is my job in the interview.

## 5. Check and report

Run `npm test -- <folder>`. Every test should **fail on the assertion** (the empty method returns `undefined`). A `require` error, syntax error, or "is not a function" is a wiring bug, so fix it. Then tell me the folder path and the command to run its tests, and ask me how I'd start.
