# Shell Script Snippets

This extension contains keyword snippets and micro patterns for shell script.

## What's new in Shell Script Snippets 0.15.0

- Added `declare -x ...;`.
- Added `declare -n ...;`.
- Added boolean to declare and local.
- Added `else`.
- Added `);;` and `*);;` for a case.
- Removed `${...}` from `declare ${1:name}=$0;`.

## Index

1. [Introduction](#Introduction)
1. [Shortcut rules for Shell Script](#shortcut-rules-for-shell-script)
1. [Recommended Settings](#recommended-settings)
1. [Recommended Keyboard Shortcuts](#recommended-keyboard-shortcuts)
1. [Recommended Extensions](#recommended-extensions)


## Introduction

The idea of those snippets is to create a workflow with micro patterns. Write one to four characters and you get the keyword or pattern.

Some prefixes are twice, because the rules are matching different patterns like `e1` -> `echo ;` and `export ;`. Then you have to pick the right one.

__The following prefixes are just examples to explain the rules.__ To see the complete list, please visit [SNIPPETS.md](https://github.com/L13/vscode-sh-snippets/blob/master/SNIPPETS.md). If a keyword or pattern might be missing, please open an issue on [Github](https://github.com/L13/vscode-sh-snippets/issues) and make a suggestion.

## Shortcut rules for Shell Script

### 1. The first letter of a word or the upper case in camel or pascal case defines the prefix.

| Prefix  | Snippet |
| -------:| ------- |
| `n`     | <b>n</b>ull |
| `f`     | <b>f</b>alse |
| `t`     | <b>t</b>rue |
| `itf`   | <b>i</b>f <i>CONDITION</i>; <b>t</b>hen ... <b>f</b>i |
| `wdd`   | <b>w</b>hile <i>CONDITION</i>; <b>d</b>o ... <b>d</b>one |

### 2. An underscore "\_" defines a value or subshell.

| Prefix  | Snippet |
| -------:| ------- |
| `_`     | "${}" |
| `__`    | "$()" |

### 3. An underscore "\_" after a character defines a brace scope.

| Prefix  | Snippet |
| -------:| ------- |
| `f_`    | <b>f</b>unction <i>NAME</i> <b>{ ... }</b> |
| `$_`    | <i>NAME</i> <b>()</b> <b>{ ... }</b> |

### 4. The number "1" at the end defines a one line snippet.

| Prefix  | Snippet |
| -------:| ------- |
| `e1`    | <b>e</b>cho ...; |
| `s1`    | <b>s</b>hift<i>$0</i>; |

### 5. A case can be defined by the two following prefixes.

| Prefix  | Snippet |
| -------:| ------- |
| `_)`    | <b>)</b> ... ;; |
| `_*`    | <b>*)</b> ... ;; |

### 6. A "b" or a "z" at the end stands for bash or zsh.

| Prefix  | Snippet |
| -------:| ------- |
| `s1b`   | source "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/.sh"; |
| `s1z`   | source "$(cd "$(dirname "${(%):-%x}")" && pwd)/.zsh"; |

### 7. A default pattern for a script can be initialized with

| Prefix  | Snippet |
| -------:| ------- |
| `$b`    | #!/usr/bin/env bash main () { ... exit 0; };main "$@"; |
| `$z`    | #!/usr/bin/env zsh main () { ... exit 0; };main "$@"; |

## Recommended Settings

It is recommended to set the snippet suggestions to top.

```json
"editor.snippetSuggestions": "top",
```

## Recommended Keyboard Shortcuts

Please have the following keyboard shortcuts always in mind, because these are fundamental to get the most out of it. Every tab stop is used only if necessary, because it prevents VS Code to open the IntelliSense menu automatically. So sometimes `DownArrow` or `Cmd/Ctrl + Enter` can have the same effect.

### macOS

* `Tab` - Jump to the next tab stop of the snippet.
* `DownArrow` - Move the caret down one line.
* `Cmd + Enter` - Insert line below, even if the caret is in the middle of a line.
* `Cmd + Shift + Enter` - Insert line above, even if the caret is in the middle of a line.

### Windows / Linux

* `Tab` - Jump to the next tab stop of the snippet.
* `DownArrow` - Move the caret down one line.
* `Ctrl + Enter` - Insert line below, even if the caret is in the middle of a line.
* `Ctrl + Shift + Enter` - Insert line above, even if the caret is in the middle of a line.

## Recommended Extensions

- [Extension Pack](https://marketplace.visualstudio.com/items?itemName=L13RARY.l13-extension-pack)