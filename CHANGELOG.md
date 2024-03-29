# Change Log
All notable changes to the "Shell Script Snippets" extension will be documented in this file.

## [0.16.1] - 2023-04-16

### Changed
- Changed README.md for Anti-Virus false positive check.

## [0.16.0] - 2023-04-09

### Changed
- Added `l13Snippets.shellScript.useFunctionBlockPadding` to enable or disable line padding in function blocks.

## [0.15.1] - 2021-02-01

### Fixed
- Fixed missing semicolon.
- Fixed prefix for declare boolean.

## [0.15.0] - 2021-01-31

### Added
- Added `declare -x ...;`.
- Added `declare -n ...;`.
- Added boolean to declare and local.
- Added `else`.
- Added `);;` and `*);;` for a case.

## Removed
- Removed `${...}` from `declare ${1:name}=$0;`.

## [0.14.0] - 2020-07-19

### Added
- Added `break;`.
- Added `for ((i=1; i<$0; i++)); do ... done`.

### Changed
- Changed `continue;`.

## [0.13.1] - 2020-07-05

### Fixed
- Fixed prefix for local number.

## [0.13.0] - 2020-07-05
- Initial release