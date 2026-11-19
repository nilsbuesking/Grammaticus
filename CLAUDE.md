# Grammaticus: notes for Claude Code

The owner, Nils, does not program. Explain changes in plain English, test them yourself, and keep the app working
on an iPhone 17 Pro (Safari, home-screen web app). British English in all text. Nils is a German native speaker who
has lived in London for over a decade; his German grammar has drifted a little, his English is good with room to
improve, his Latin is at the very beginning.

Grammaticus is the third of Nils's language apps, beside Viātor (old languages, github.com/nilsbuesking/Viator) and
Hospes (modern languages, github.com/nilsbuesking/Hospes). It teaches German and English grammar **by concept, not by
language**: each lecture takes one concept and covers both languages, from scratch in terminology and system but
pitched at an advanced speaker (not starting from zero linguistically). Text only: no audio, no flashcards.

The plan (about 54 lectures in units 0–9) is in `content/catalogue.js`; planned titles are listed under `planned`.
A copy of the agreed plan is in the claude.ai project as `claude/grammaticus-plan.md`.

## Architecture rules
- `app.js` / `app.css` are the engine; content goes in `content/`. No build step, no frameworks. Outside services:
  Google Fonts, and GitHub's API for the backup only.
- A lecture is one file `content/unit-NN/lecture-MM.js` calling `Grammaticus.addLecture({...})`; copy the structure
  of `content/unit-00/lecture-04.js`. Add the file to its unit's `lectures` in `content/catalogue.js` (and remove its
  title from `planned`), and to `CORE` in `sw.js`.
- Lecture fields: `id` ('U.N'), `unit`, `number`, `title`, `subtitle`, `minutes`, `intro` (shown above the first
  section). **Core sections** (always): `concept`, `german`, `english`, `contrast`. **Optional sections** (only where
  there is real substance; never padded): `usage` (rule vs usage), `style`, `pitfalls` (best practice and pitfalls),
  `latin`, `summary` (array of key points, bullets). A section is an HTML string or an array of
  `{ title, html }` blocks (more than three blocks get a jump list). Also `cards` (quick-reference cards:
  `{ id, title, tags, html }`), `terms` (glossary: `{ en, de, la, note }`) and `exercises` (optional for Nils; they do
  not count towards a lecture being read).
- Exercise types: `mc` (`options`, `answer`; `keepOrder` to stop shuffling), `gap` (`answers`; `cs: true` if case
  matters), `comma` (`words`, `commas` = indices of the words after which a comma is required, `optional` = indices
  where a comma may stand), `match` (`pairs`), `order` (`tokens` in the right order; `alt` for other accepted orders as
  arrays of indices). Every item needs an `explain`; `lang: 'de'|'en'` marks the language of the item.
- Each unit may have a check (`content/unit-NN/check.js`, `Grammaticus.addCheck(unitId, { intro, items })`); each item
  names its `lecture`. Missed questions mark lectures “Focus” on the course page.
- Reference tab: full-text search over all lectures, cards and terms (offline; umlauts and ß fold to a/o/u/ss), the
  quick-reference cards, and the glossary of terms.
- Backup: a file (share sheet / copy text) and, if set up, an automatic private GitHub Gist
  (`grammaticus-progress.json`) via a fine-grained token with only the Gists permission (the Hospes token works).
  Token and gist id live in `localStorage['grammaticus.sync']`, never in backups. Empty progress is never uploaded; a
  phone with progress that finds an existing gist pauses (`hold`) until Nils restores or overwrites.
- Progress is versioned (`FORMAT` in app.js, starting at 1). Any change to what is stored must bump `FORMAT` and
  extend `migrate()`; new stored fields need a default there.
- Offline copy: `sw.js` serves one complete version and replaces it only when `VERSION` changes. Raise `VERSION` in
  `sw.js` and `BUILD` in `app.js` with every push.
- Phone layout: form text never under 16 px; touch targets 44 px; no page wider than the screen at any text size.
  Tables on phones: two columns where possible (put a second line in `<span class="tnote">`).

## Content rules
- Original text only. British English; German in the German section is written in German (Nils asked for a mix:
  German sections in German, everything else in English, German terms alongside English ones).
- **Evidence**: Nils is sceptical of received wisdom. Qualify claims to their basis; say when something is
  “usually said” but poorly documented. For codified rules give the source (`<p class="src">` renders as “Basis: …”):
  Amtliches Regelwerk 2024 (rechtschreibrat.com) for German spelling and punctuation, Duden Bände 4 and 9 for
  grammar, Quirk et al. 1985 / Huddleston & Pullum 2002 for English grammar, New Hart's Rules for British house
  style. Check uncertain facts by searching before writing them.
- **Rule vs usage** is a core theme: distinguish the codified rule, edited usage and everyday usage (the `usage`
  section), with examples, including where the norm has shifted or people misremember it.
- Examples, many of them. Markup conventions (styled in app.css):
  `<div class="ex"><p lang="de">…</p><p lang="en">…</p><p class="gl">gloss</p></div>` (labels DE/EN/LA appear by
  themselves); `class="bad"` ungrammatical (red ✗), `class="odd"` questionable/non-standard (ochre ?),
  `class="good"` (✓); `<u class="k">…</u>` marks the part in focus; `<p class="rule">` a rule box;
  `<p class="contrast">` a DE↔EN note inside other sections; `<p class="latin">` a Latin note;
  `<dl class="timeline">` dates. Typography: German quotation marks „…“, English ‘…’ / “…”, typographic apostrophe ’.
- Latin: only where it genuinely helps (terminology, case, tense in subordinate clauses); Nils is a beginner.
- After writing a lecture, list everything you are less than certain of in CONTENT-CHECKS.md.

## Testing after changes
`node tests/validate_content.js` after any content change (one second). Before every push `python3 tests/run_all.py`
(starts a local server; exit code 1 on failure). Add a browser test per unit (copy `tests/unit0.py`: it reads every
section, answers every exercise and check question from the data, searches the reference, checks widths at extra-large
text). After pushing, check that the GitHub Pages deployment succeeded.
