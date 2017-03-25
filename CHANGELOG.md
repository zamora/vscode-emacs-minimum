## 0.5.0 (2017-03-25)
- Added bindings to manipulate window splitting and joining

## 0.4.0 (2017-03-16)
- Using clipboardy for system clipboard access, old dependency does not work on linux.

## 0.3.2 (2017-03-10)
- Added icon

## 0.3.0 (2017-03-09)
- Repackaged and republished for ease of access on vscode marketplace.

## 0.2.0 (2017-01-14)
- Forked and merged various pull requests and fixes
- The clipboard handling is simplified by the removal of the emacs-only kill ring (which was also an unfinished implementation in the original). Copy, Cut, Yank and C-K work with the system clipboard now.
- C+x k to close tab, C+x C-k all tabs
- C+l centers screen on the cursor line
- C+x C+f bound to quick open file
- yank overwrites selection

## 0.1.1 (2016-11-04)
- Fix #24: C-g does not cancel suggestions and prompts
- Update vscode engine

## 0.1.0
- Fix: IntelliSense Suggestion.
- Add C-x b.

## 0.0.10 (2016-08-29)
- Fix #18: Add Esc to step out from mark mode.
- Add C-x C-o.
- Fix: do not enter automatically in Mark Mode after Yanking. 

## 0.0.9 (2016-07-24)
- Add Kill-ring.
- Alt-x show commands palette.

All changes written by gizak, sammy44nts. Thanks

## 0.0.7 (2016-07-14)
- bug fix for C-k. **Thanks trezm.**
- C-x C-f execute "workbench.action.files.openFile".

Thanks sammy44nts.

## 0.0.6
- C-p and C-n can be used in other panels such as Suggestion and Hint.
- Fix bug C-x C-f won't open file explorer.
- Add one more undo operation C-/
- Add redo operation C-x z
- Fix incorrect column moving after using C-a and C-e

These commands and bug fixes were coding by kpping. Thanks. :)

## 0.0.5
- Change the processing of C-u, C-h.
- Change the processing of C-x C-f, C-x C-w, C-x C-s.

## 0.0.4
- Modify the search operation.

## 0.0.3
- Fixed a bug that occurred when you start from the command line.
