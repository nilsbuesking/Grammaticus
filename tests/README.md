# Tests

    python3 tests/run_all.py          # everything (about half a minute)
    python3 tests/run_all.py unit0    # only tests whose file name contains "unit0"

Starts a local server on port 8765 if none is running. A test fails if it crashes, prints a line starting `FAIL`,
reports incorrect answers (`not correct: [...]`) or page errors (`errors [...]`), or prints `N (expect M)` with
different numbers. Logs: `/tmp/grammaticus-test-logs/`; screenshots: `/tmp/grammaticus-shots/`.

- `validate_content.js` (Node, no browser): catalogue files exist and are in the offline list; every lecture has its
  core sections and a matching id; exercises, check questions, cards and terms are complete; HTML tags are balanced.
- `unit0.py`: Unit 0 end to end at iPhone width (see the comment at its top).
- `backup_sync.py`: the automatic GitHub Gist backup against a simulated GitHub.
- `offline.py`: start, read and search offline.
- `version_check.py`: `VERSION` (sw.js) and `BUILD` (app.js) raised whenever app files change.
- `helpers.py`: shared by the browser tests (local fonts, answering an item from its data).

`tests/fonts` holds the app's fonts (SIL Open Font Licence) because Google Fonts cannot be reached from the test machine.
