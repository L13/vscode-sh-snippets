## Shell Script Snippets

Complete list of all Shell Script Snippets for Visual Studio Code. The rules for all these snippets are explained in the [README.md](./README.md)

### Shell

| Prefix | Snippet |
| ------:| ------- |
| `_` | `"\${$0}"` |
| `__` | `"\$($0)"` |
| `f` | `false` |
| `t` | `true` |
| `n` | `null` |
| `r` | `return` |
| `b` | `break$0;` |
| `c` | `continue$0;` |
| `s` | `shift$0;` |
| `a1` | `alias ${1:identifer}='${0:command}';` |
| `e1` | `echo $0;` |
| `e1` | `export $0;` |
| `s1b` | `source "\$(cd "\$(dirname "\${BASH_SOURCE[0]}")" && pwd)/$0.sh";` |
| `s1z` | `source "\$(cd "\$(dirname "\${(%):-%x}")" && pwd)/$0.zsh";` |
| `d1` | `declare ${1:name}=\${${0:1}};` |
| `da1` | `declare -a ${1:name}=($0);` |
| `dA1` | `declare -A ${1:name}=($0);` |
| `di1` | `declare -i ${1:name}=${0:0};` |
| `dr1` | `declare -r ${1:name}="$0";` |
| `ds1` | `declare ${1:name}="$0";` |
| `itf` | `if $0; then  fi` |
| `et` | `elif $0; then` |
| `fidd` | `for $1 in $0; do  done` |
| `fdd` | `for ((i=1; i<$0; i++)); do  done` |
| `wdd` | `while $0; do  done` |
| `udd` | `until $0; do  done` |
| `cie` | `case $0 in  esac` |
| `f_` | `function ${1:name} {  $0  }` |
| `$_` | `${1:name} () {  $0  }` |
| `l1` | `local ${1:name}=\${${0:1}};` |
| `la1` | `local -a ${1:name}=("\${!${0:1}:+\${!${0:1}}}");` |
| `lA1` | `local -A ${1:name}=("\${!${0:1}:+\${!${0:1}}}");` |
| `li1` | `local -i ${1:name}=\${${0:1}};` |
| `lr1` | `local -r ${1:name}="\${${0:1}}";` |
| `ls1` | `local ${1:name}="\${${0:1}}";` |
| `$b` | `#!/usr/bin/env bash main () {  set -o errexit; set -o pipefail; set -o nounset;  local -r __dirname="$(cd "$(dirname "\${BASH_SOURCE[0]}")" && pwd)"; local -r __filename="\${__dirname}/$(basename "\${BASH_SOURCE[0]}")";  $0  exit 0;};main "$@";` |
| `$z` | `#!/usr/bin/env zsh main () {  set -o errexit; set -o pipefail; set -o nounset;  local -r __dirname="$(cd "$(dirname "\${(%):-%x}")" && pwd)"; local -r __filename="\${__dirname}/$(basename "\${(%):-%x}")";  $0  exit 0;};main "$@";` |
