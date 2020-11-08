# Change Log
All notable changes to the "Shell Script Snippets" extension will be documented in this file.

## [0.15.0] - 2020-11-15

### Added
- Added `declare -x ...;`.
- Added `declare -n ...;`.
- Added boolean to declare and local.
- Added `else`.

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