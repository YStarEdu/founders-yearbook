// Checks every card in students/ before a mentor merges it.
import { readdirSync, readFileSync } from "node:fs";

const problems = [];
const files = readdirSync("students").filter(f => !f.startsWith("."));
const contact = /@|\b\d{3}[\s.-]?\d{3}[\s.-]?\d{4}\b|(instagram|tiktok|snapchat|discord)\.com/i;

for (const f of files) {
  const bad = msg => problems.push(`${f}: ${msg}`);
  if (!/^[a-z0-9]+-[a-z0-9]\.json$/.test(f)) bad("name the file like maya-s.json (lowercase name, a dash, one letter, .json)");
  let c;
  try { c = JSON.parse(readFileSync(`students/${f}`, "utf8")); } catch (e) { bad("this isn't valid JSON. Check the quotes, commas and curly brackets."); continue; }
  const allowed = ["name", "emoji", "product", "line", "url"];
  for (const k of Object.keys(c)) if (!allowed.includes(k)) bad(`remove the extra field "${k}"`);
  for (const [k, max] of [["name", 20], ["product", 30], ["line", 90]]) {
    if (typeof c[k] !== "string" || !c[k].trim()) bad(`fill in "${k}"`);
    else if (c[k].length > max) bad(`"${k}" is ${c[k].length} characters; keep it under ${max}`);
    else if (contact.test(c[k])) bad(`"${k}" looks like it has contact details. Leave out emails, phone numbers and handles.`);
  }
  if (typeof c.emoji !== "string" || ![...c.emoji].length || [...c.emoji].length > 4) bad(`"emoji" should be one emoji`);
  if (c.url && !/^https:\/\/[^\s"<>]+$/.test(c.url)) bad(`"url" must start with https:// (or be "" if your product isn't live yet)`);
  if (/^your /i.test(c.name || "")) bad("replace the template text with your own");
}

if (problems.length) { console.log("Fix these before your mentor can merge:\n" + problems.map(p => "  - " + p).join("\n")); process.exit(1); }
console.log(`All ${files.length} cards look good.`);
