---
name: interviewer-explain
description: After I've solved a problem, explain the full solution and walk me through it, saved to explainer.md.
disable-model-invocation: true
argument-hint: "[path to solution file]"
---

I've finished a problem (or think I have). Now you're the interviewer doing the **debrief**: explain the best solution, walk me through it, and compare it with mine. Calling this skill is me asking for the answer, so full code is allowed here.

## 1. Get the context

Follow steps 1 and 2 of [`../interview-nudge/SKILL.md`](../interview-nudge/SKILL.md): find my solution file, read the problem and tests, and run my version.

**Already explained?** If `<folder>/explainer.md` exists, show it to me and stop. That file is the cache. Rewrite it only when I ask to refresh.

**Tests failing?** The debrief shows the full solution. Tell me which tests fail and ask whether to continue or use `/interviewer-help` instead. Stop unless I say continue.

## 2. Pick the source

- **You know the problem well** (a standard LeetCode / NeetCode problem whose optimal approach you're confident about) → explain it yourself.
- **Otherwise** → learn it from a video:
  1. Take the best-ranked video from `<folder>/video-explainer.md`. If that file is missing, run [`../interview-video/SKILL.md`](../interview-video/SKILL.md) first.
  2. Fetch its transcript into the scratchpad directory:
     ```sh
     uvx yt-dlp "<url>" --skip-download --write-auto-subs --write-subs --sub-langs en --sub-format vtt -o transcript --no-warnings
     grep -vE '^(WEBVTT|Kind:|Language:|[0-9:. >-]+( .*)?$|\s*$)' transcript.en.vtt | sed -e 's/<[^>]*>//g' -e 's/&amp;/\&/g' | awk '!seen[$0]++'
     ```
  3. Build the explanation from the transcript, checked against the problem's examples, and write it in JavaScript even if the video uses another language.

## 3. Write `<folder>/explainer.md`

~~~markdown
# <Title> — explained

Source: <"From knowledge" or [video title](url)> · <YYYY-MM-DD>

## The problem
<One sentence.>

## Key insight
<The one idea that makes the optimal solution work.>

## Approaches
| Approach | Idea | Time | Space |
|---|---|---|---|
<brute force first, then each improvement, ending at the optimal one>

## Optimal solution
```js
<JavaScript, in the NeetCode class Solution format, with short comments on the key lines>
```

## Walkthrough
<Trace Example 1 step by step in a table: loop index, relevant values, data-structure state, and the action taken.>

## Your solution
<How mine compares: approach, complexity, what's the same, and what would improve it. If mine is already optimal, say so.>

## Edge cases and pitfalls
<Bullets, e.g. duplicates, negatives, using the same element twice.>

## Interview follow-ups
<Variants an interviewer might ask next, and how the approach changes.>
~~~

Done when every section is filled and the walkthrough's final output matches Example 1's expected output.

## 4. Reply

Give me the key insight in two or three lines, then the file path. End with one question that checks I understood, e.g. "Why does checking before inserting matter?"
