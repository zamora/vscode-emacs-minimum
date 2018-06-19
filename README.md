# vscode-emacs-minimum

This plugin provides emacs keybindings and workflow for Visual Studio Code and is a fork of the great vscode extension by [hiro-sun](https://github.com/hiro-sun/vscode-emacs).

But removes most of keybindings only keep minimum **Move commands**.


### Move commands
|Command | Desc |
|--------|------|
| `C-f` | Move forward |
| `C-b` | Move backward |
| `C-n` | Move to the next line |
| `C-p` | Move to the previous line |
| `C-a` | Move to the beginning of line |
| `C-e` | Move to the end of line |
| `C-M-f` | Move forward by one word unit |
| `C-M-b` | Move backward by one word unit |
| `M->` | Move to the end of buffer |
| `M-<` | Move to the beginning of buffer |


## Conflicts with default key bindings
- `ctrl+a`: workbench.action.selectAll => **Use `alt+a` instead**.
- `ctrl+b`: workbench.action.toggleSidebarVisibility => **Use `alt+b` instead**;
- `ctrl+f`: actions.find => **Use `alt+f` instead**;
- `ctrl+p` & `ctrl+e`: workbench.action.quickOpen => **Use `alt+p`, `alt+e` instead**;
- `ctrl+p`: workbench.action.quickOpenNavigateNext => **Use `ctrl+n` instead**.

# More information

The logo is from the great [Pacifica Icon Set](http://bokehlicia.deviantart.com/art/Pacifica-Icons-402508559).
