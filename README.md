# vscode-emacs-friendly

This plugin provides emacs keybindings and workflow for Visual Studio Code and is a fork of the great vscode extension by [hiro-sun](https://github.com/hiro-sun/vscode-emacs).

It merges some of the pull requests in the original and other external helpers that make the extension a little less an exact copy of emacs behavior, and a little more friendly in interacting with the system clipboard and normal vscode interactions.

The following are some of the changes and enhancements from the original:

* The clipboard handling is simplified by the removal of the emacs-only kill ring (which was also an unfinished implementation in the original). Copy, Cut, Yank and C-K work with the system clipboard now.
* C+x k to close tab, C+x C-k all tabs
* C+l centers screen on the cursor line
* C+x C+f bound to quick open file
* yank overwrites selection


### Move commands
|Command | Status | Desc |
|--------|--------|------|
| `C-f` | OK | Move forward |
| `C-b` | OK | Move backward |
| `C-n` | OK | Move to the next line |
| `C-p` | OK | Move to the previous line |
| `C-a` | OK | Move to the beginning of line |
| `C-e` | OK | Move to the end of line |
| `M-f` | OK | Move forward by one word unit |
| `M-b` | OK | Move backward by one word unit |
| `M->` | OK | Move to the end of buffer |
| `M-<` | OK | Move to the beginning of buffer |
| `C-v` | OK | Scroll down by one screen unit |
| `M-v` | OK | Scroll up by one screen unit |
| `C-x C-n` | - | Set goal column |
| `C-u C-x C-n` | - | Deactivate C-x C-n |
| `M-g g` | OK | Jump to line (command palette) |
| `C-l` | OK | Center screen on current line |


### Search Commands
|Command | Status | Desc |
|--------|--------|------|
| `C-s` | OK | Search forward |
| `C-r` | OK | Search backward |
| `C-M-n` | OK | Add selection to next find match |

### Edit commands
|Command | Status | Desc |
|--------|--------|------|
| `C-d` | OK | Delete right (DEL) |
| `C-h` | OK | Delete left (BACKSPACE) |
| `M-d` | OK | Delete word |
| `C-k` | OK | Kill to line end |
| `C-S-Bksp` | OK | Kill entire line |
| `C-w` | OK | Kill region |
| `M-w` | OK | Copy region to kill ring |
| `C-y` | OK | Yank |
| `C-j` | OK | Line Feed |
| `C-m` | - | Carriage Return |
| `C-i` | - | Horizontal Tab |
| `C-x C-o` | OK | Delete blank lines around |
| `C-x h` | OK | Select All |
| `C-x u` (`C-/`)| OK | Undo |
| `C-;` | △ | Toggle line comment in and out |
| `M-;` | △ | Toggle region comment in and out |
| `C-x C-l` | OK | Convert to lower case |
| `C-x C-u` | OK | Convert to upper case |

### Other Commands
|Command | Status | Desc |
|--------|--------|------|
| `C-g` | OK | Cancel |
| `C-space` | OK | Set mark |
| `C-\` | - | IME control |
| `C-quote` | OK | IntelliSense Suggestion |
| `C-doublequote` | △ | IntelliSense Parameter Hint |
| `M-x` | OK | Open command palette |
| `M-/(dabbrev)` | - | Auto-completion |
| `M-num command` | - | Repeat command `num` times |
| `C-M-SPC` | OK | Toggle SideBar visibility |
| `C-x z` | | Toggle Zen Mode |

### File Commands
|Command | Status | Desc |
|--------|--------|------|
| `C-x C-s` | OK | Save |
| `C-x C-w` | OK | Save as |
| `C-x C-n` | OK | Open new window |
| `C-x C-b` | - | Create new file and open |

### Tab / Buffer Manipulation Commands
|Command | Status | Desc |
|--------|--------|------|
| `C-x b` | OK | Switch to another open buffer |
| `C-x C-f` | OK | QuickOpen a file |
| `C-x k` | OK | Close current tab (buffer) |
| `C-x C-k` | OK | Close all tabs |
| `C-x 1` | OK | Close editors in other (split) group.  |
| `C-x 2` | OK | Split editor |
| `C-x 3` | OK | Toggle split layout (vertical to horizontal) |
| `C-x o` | OK | Focus other split editor |

## Conflicts with default key bindings
- `ctrl+d`: editor.action.addSelectionToNextFindMatch => **Use `ctrl+alt+n` instead**;
- `ctrl+g`: workbench.action.gotoLine => **Use `alt+g g` instead**;
- `ctrl+b`: workbench.action.toggleSidebarVisibility => **Use `ctrl+alt+space` instead**;
- `ctrl+space`: toggleSuggestionDetails, editor.action.triggerSuggest => **Use `ctrl+'` instead**;
- `ctrl+x`: editor.action.clipboardCutAction => **Use `ctrl+w` instead**;
- `ctrl+v`: editor.action.clipboardPasteAction => **Use `ctrl+y` instead**;
- `ctrl+k`: editor.debug.action.showDebugHover, editor.action.trimTrailingWhitespace, editor.action.showHover, editor.action.removeCommentLine, editor.action.addCommentLine, editor.action.openDeclarationToTheSide;
- `ctrl+k z`: workbench.action.toggleZenMode => **Use `ctrl+x z` instead**;
- `ctrl+y`: redo;
- `ctrl+m`: editor.action.toggleTabFocusMode;
- `ctrl+/`: editor.action.commentLine => **Use `ctrl+;` instead**;
- `ctrl+p` & `ctrl+e`: workbench.action.quickOpen => **Use `ctrl+x b` instead**;
- `ctrl+p`: workbench.action.quickOpenNavigateNext => **Use `ctrl+n` instead**.

# More information

The logo is from the great [Pacifica Icon Set](http://bokehlicia.deviantart.com/art/Pacifica-Icons-402508559).
