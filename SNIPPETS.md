## Shell Script Snippets

Complete list of all Shell Script Snippets for Visual Studio Code. The rules for all these snippets are explained in the [README.md](./README.md)


### Shell Script

| Prefix | Snippet |
| ------:| ------- |
| `$_` | `${1:name} () {  $0  }` |
| `$b` | `#!/usr/bin/env bash main () {  set -o errexit; set -o pipefail; set -o nounset;  local -r __dirname="$(cd "$(dirname "\${BASH_SOURCE[0]}")" && pwd)"; local -r __filename="\${__dirname}/$(basename "\${BASH_SOURCE[0]}")";  $0  exit 0;};main "$@";` |
| `$z` | `#!/usr/bin/env zsh main () {  set -o errexit; set -o pipefail; set -o nounset;  local -r __dirname="$(cd "$(dirname "\${(%):-%x}")" && pwd)"; local -r __filename="\${__dirname}/$(basename "\${(%):-%x}")";  $0  exit 0;};main "$@";` |
| `_)` | `$1) $0 ;;` |
| `_*` | `*) $0 ;;` |
| `__` | `"\$($0)"` |
| `_` | `"\${$0}"` |
| `a1` | `alias ${1:identifer}='${0:command}';` |
| `b` | `break$0;` |
| `c` | `continue$0;` |
| `cie` | `case $0 in  esac` |
| `d1` | `declare ${1:name}=$0;` |
| `dA1` | `declare -A ${1:name}=($0);` |
| `da1` | `declare -a ${1:name}=($0);` |
| `db1` | `declare ${1:name}=${0:false};` |
| `di1` | `declare -i ${1:name}=${0:0};` |
| `dn1` | `declare -n ${1:name}=$0;` |
| `dr1` | `declare -r ${1:name}="$0";` |
| `ds1` | `declare ${1:name}="$0";` |
| `dx1` | `declare -x ${1:name}=$0;` |
| `e1` | `echo $0;` |
| `e1` | `export $0;` |
| `e` | `else` |
| `et` | `elif $0; then` |
| `f_` | `function ${1:name} {  $0  }` |
| `f` | `false` |
| `fdd` | `for ((i=1; i<$0; i++)); do  done` |
| `fidd` | `for $1 in $0; do  done` |
| `itf` | `if $0; then  fi` |
| `l1` | `local ${1:name}=\${${0:1}};` |
| `lA1` | `local -A ${1:name}=("\${!${0:1}:+\${!${0:1}}}");` |
| `la1` | `local -a ${1:name}=("\${!${0:1}:+\${!${0:1}}}");` |
| `lb1` | `local ${1:name}=${0:false};` |
| `li1` | `local -i ${1:name}=\${${0:1}};` |
| `lr1` | `local -r ${1:name}="\${${0:1}}";` |
| `ls1` | `local ${1:name}="\${${0:1}}";` |
| `n` | `null` |
| `r` | `return` |
| `s1b` | `source "\$(cd "\$(dirname "\${BASH_SOURCE[0]}")" && pwd)/$0.sh";` |
| `s1z` | `source "\$(cd "\$(dirname "\${(%):-%x}")" && pwd)/$0.zsh";` |
| `s` | `shift$0;` |
| `sidd` | `select $1 in $0; do  done` |
| `t` | `test $1 != $0` |
| `t` | `test $1 = $0` |
| `t` | `true` |
| `td` | `test -d $0` |
| `te` | `test -e $0` |
| `tef` | `test $1 -ef $0` |
| `teq` | `test $1 -eq $0` |
| `tf` | `test -f $0` |
| `tge` | `test $1 -ge $0` |
| `tgt` | `test $1 -gt $0` |
| `th` | `test -h $0` |
| `tle` | `test $1 -le $0` |
| `tlt` | `test $1 -lt $0` |
| `tn` | `test -n $0` |
| `tne` | `test $1 -ne $0` |
| `tnt` | `test $1 -nt $0` |
| `tot` | `test $1 -ot $0` |
| `tr` | `test -r $0` |
| `tw` | `test -w $0` |
| `tx` | `test -x $0` |
| `tz` | `test -z $0` |
| `udd` | `until $0; do  done` |
| `wdd` | `while $0; do  done` |