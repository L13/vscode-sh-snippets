#!/usr/bin/env bash
main () {

set -o errexit;
set -o pipefail;
set -o nounset;

local -r __dirname="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)";
local -r __filename="${__dirname}/$(basename "${BASH_SOURCE[0]}")";

# Imports ______________________________________________________________________



# Variables ____________________________________________________________________



# Functions ____________________________________________________________________

function foo {
	
	local name="${1}";
	
	echo "${name}";
	
}

# Options ______________________________________________________________________



# Initialize ___________________________________________________________________

echo "${__dirname}";
echo "${__filename}";

foo "${__dirname}";

# EOF - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
exit 0;};main "$@";