// Print only the spoiler-free parts of a saved problem page.
//   NeetCode: the saved HTML page. Its ng-state JSON also holds solutions, hints and the article; never print those.
//   LeetCode: the saved GraphQL response (see SKILL.md step 1). Only description + starter fields are requested.
// Usage: node extract.js page.html|problem.json   → JSON on stdout, exit 1 if no problem found (login wall / premium).
const raw = require("fs").readFileSync(process.argv[2], "utf8");

function fail() {
    console.error("NO_PROBLEM: page has no problem data (login wall or changed layout)");
    process.exit(1);
}

function leetcode() {
    const q = JSON.parse(raw).data?.question;
    if (!q || !q.content) fail();
    return {
        title: q.title,
        leetcode: q.questionFrontendId,
        difficulty: q.difficulty,
        description: q.content.trim(),
        complexity: null,
        starterJs: q.codeSnippets.find((c) => c.langSlug === "javascript")?.code ?? null,
    };
}

function neetcode() {
    const m = raw.match(/<script id="ng-state" type="application\/json">([\s\S]*?)<\/script>/);
    const state = m ? JSON.parse(m[1]) : {};
    const p = Object.values(state).find((v) => v && v.starterCode && v.description);
    if (!p) fail();

    // Description ends where the <details> accordions (topics, hints, company tags) begin.
    // Keep only the "Recommended Time & Space Complexity" accordion's text.
    const [body, ...rest] = p.description.split(/<br>\s*(?:<br>\s*)*<details/);
    const complexity = rest
        .map((d) => d.match(/Recommended Time & Space Complexity<\/summary>([\s\S]*?)<\/details>/))
        .find(Boolean);
    return {
        title: p.name,
        leetcode: (raw.match(/Leetcode (\d+)\./) || [])[1] || null,
        difficulty: p.difficulty,
        description: body.replace(/<br>/g, "").trim(),
        complexity: complexity ? complexity[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : null,
        starterJs: p.starterCode.javascript,
    };
}

console.log(JSON.stringify(raw.trimStart().startsWith("{") ? leetcode() : neetcode(), null, 2));
