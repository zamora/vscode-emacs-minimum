# Fork information

This is a personal fork merging some of the oustanding pull requests that the original lacked.

The clipboard handling is also simplified, by the removal of the emacs-only kill ring (which was also an unfinished implementation at the time). Copy, Cut, Yank and C-K work with the system clipboard now.

To install:
```
$ npm install -g vsce
$ npm install
$ vsce package
$ code --install-extension vscode-emacs-0.1.1.vsix
  # If binary is not in path on osx, might be at /Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code
```

# vscode-emacs

This plugin provides emacs keybindings and workflow for Visual Studio Code.

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
| `C-l` | - | Use `ext install keyboard-scroll` to activate |

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

### File Commands
|Command | Status | Desc |
|--------|--------|------|
| `C-x b` | OK | Switch to another open buffer |
| `C-x C-f` | OK | QuickOpen a file |
| `C-x C-s` | OK | Save |
| `C-x C-w` | OK | Save as |
| `C-x i` | - | Insert buffer from file |
| `C-x C-d` | - | Open Folder |
| `C-x C-n` | - | Open new window |
| `C-x C-b` | - | Create new file and open |

## Conflicts with default key bindings
- `ctrl+d`: editor.action.addSelectionToNextFindMatch => **Use `ctrl+alt+n` instead**;
- `ctrl+g`: workbench.action.gotoLine => **Use `alt+g g` instead**;
- `ctrl+b`: workbench.action.toggleSidebarVisibility => **Use `ctrl+alt+space` instead**;
- `ctrl+space`: toggleSuggestionDetails, editor.action.triggerSuggest => **Use `ctrl+'` instead**;
- `ctrl+x`: editor.action.clipboardCutAction => **Use `ctrl+w` instead**;
- `ctrl+v`: editor.action.clipboardPasteAction => **Use `ctrl+y` instead**;
- `ctrl+k`: editor.debug.action.showDebugHover, editor.action.trimTrailingWhitespace, editor.action.showHover, editor.action.removeCommentLine, editor.action.addCommentLine, editor.action.openDeclarationToTheSide;
- `ctrl+y`: redo;
- `ctrl+m`: editor.action.toggleTabFocusMode;
- `ctrl+/`: editor.action.commentLine => **Use `ctrl+;` instead**;
- `ctrl+p` & `ctrl+e`: workbench.action.quickOpen => **Use `ctrl+x b` instead**;
- `ctrl+p`: workbench.action.quickOpenNavigateNext => **Use `ctrl+n` instead**.
