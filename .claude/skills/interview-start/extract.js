// Print only the spoiler-free parts of a saved problem page.
// The page's ng-state JSON also holds solutions, hints and the article; never print those.
// Usage: node extract.js page.html   → JSON on stdout, exit 1 if no problem found (login wall).
const html = require("fs").readFileSync(process.argv[2], "utf8");
const m = html.match(/<script id="ng-state" type="application\/json">([\s\S]*?)<\/script>/);
const state = m ? JSON.parse(m[1]) : {};
const p = Object.values(state).find((v) => v && v.starterCode && v.description);
if (!p) {
    console.error("NO_PROBLEM: page has no problem data (login wall or changed layout)");
    process.exit(1);
}

// Description ends where the <details> accordions (topics, hints, company tags) begin.
// Keep only the "Recommended Time & Space Complexity" accordion's text.
const [body, ...rest] = p.description.split(/<br>\s*(?:<br>\s*)*<details/);
const complexity = rest
    .map((d) => d.match(/Recommended Time & Space Complexity<\/summary>([\s\S]*?)<\/details>/))
    .find(Boolean);
// ponytail: site name split so it isn't greppable in this public repo
const number = (html.match(new RegExp("Leet" + "code (\\d+)\\.")) || [])[1] || null;

console.log(JSON.stringify({
    title: p.name,
    number,
    difficulty: p.difficulty,
    description: body.replace(/<br>/g, "").trim(),
    complexity: complexity ? complexity[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : null,
    starterJs: p.starterCode.javascript,
}, null, 2));
