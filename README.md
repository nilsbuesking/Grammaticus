# Grammaticus

A phone app for German and English grammar, organised by concept rather than by language: each lecture takes one
grammatical concept and covers both languages, with many examples, the differences between them, the gap between
the codified rule and actual usage, and best practice. Text only; works offline; progress stays on the phone with an
automatic backup to GitHub.

**Open it:** https://nilsbuesking.github.io/Grammaticus/ in Safari on the iPhone, then Share → Add to Home Screen.

## A lecture
Concept · Deutsch (written in German) · English · DE ↔ EN, and where there is something to say: Rule & usage ·
Style · Best practice & pitfalls · Latin · Key points. Exercises are optional. Each unit has a short check that shows
which lectures to read closely.

## Reference
Search across every lecture, the quick-reference cards and the terms, offline. Umlauts and ß can be typed as a, o, u
and ss.

## Automatic backup
Progress → Backup → Automatic backup to GitHub. It needs a fine-grained GitHub token with only the
“Gists: read and write” permission; the token made for Hospes works too. The backup is a private gist named
`grammaticus-progress.json`, separate from Hospes’s.

## For Claude Code
See CLAUDE.md. Tests: `python3 tests/run_all.py`. Content checks for Nils: CONTENT-CHECKS.md.
