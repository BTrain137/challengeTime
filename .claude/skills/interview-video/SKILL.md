---
name: interview-video
description: Find the top ~5 YouTube explainer videos for the problem I'm working on, ranked by likes and channel.
disable-model-invocation: true
argument-hint: "[problem name or folder]"
---

Find well-liked YouTube explanations of the problem I'm working on. Watching one means seeing the solution, and asking for this skill is me choosing that.

## 1. Identify the problem

- `$ARGUMENTS` names a problem or folder → use it.
- Otherwise take the problem folder from `git status`, and the title from its `instructions*.md`.
- Several folders or no title → ask me.

Done when you have the exact problem title and its LeetCode number. The number is the folder's `NN-` prefix.

**Already saved?** If `<folder>/video-explainer.md` exists, show me its contents, say the date it was saved, and stop. That file is the cache, so skip the search. Search again only when I ask to refresh.

## 2. Search

Run `yt-dlp` through `uvx`, so nothing gets installed:

```sh
uvx yt-dlp "ytsearch15:<title> leetcode <number>" --skip-download --no-warnings \
  --print "%(like_count)s|%(view_count)s|%(channel_follower_count)s|%(channel)s|%(duration_string)s|%(upload_date)s|%(title)s|%(webpage_url)s"
```

It takes about 30 seconds. Run it from the scratchpad directory. If `uvx` is missing, tell me to run `brew install uv`.

## 3. Filter

Keep only videos about **this** problem. Drop:
- Lookalikes with a different number or suffix ("Two Sum II", "3Sum", "Two Sum IV" when I'm on Two Sum, LeetCode 1).
- Shorts under 1 minute and livestreams over 45 minutes.
- Rows where `like_count` is `NA`.

Fewer than 5 left → run one more search with `neetcode` or `explained` added to the query.

## 4. Rank, save, and reply

Sort by likes, highest first. When likes are close, the channel with more subscribers goes first. Write the top 5 to `<folder>/video-explainer.md`, overwriting it on a refresh, then show me the same content:

```markdown
# <Title> — video explainers

Searched <YYYY-MM-DD>. Ranked by likes, then channel subscribers.
```

followed by this table:

| # | Video | Channel (subs) | Likes | Views | Length | Language | Year |
|---|---|---|---|---|---|---|---|
| 1 | [title](url) | NeetCode (1.1M) | 25.0K | 2.3M | 8:26 | Python | 2020 |

Take the language from the title (Python / Java / JavaScript / C++). If it isn't there, write `?`. I code in JavaScript, so end the file with a `Best JavaScript pick: #N, <channel>.` line if there is one.
