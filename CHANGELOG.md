# Changelog

All notable changes to this project will be documented in this file.

## 3.3.0 - 2019-08-09

### Added

- ability to pass onSelect and searchParams to locationAutoComplete input

## 3.2.1 - 2019-08-06

### Fixed

- height bug on multi-dropdown

## 3.2.0 - 2019-08-06

### Changed

- multi choice dropdown style changes

## 3.1.0 - 2019-08-05

### Changed

- location input polish (text size)
- adds a multi choice dropdown

## 3.0.2 - 2019-07-24

### Changed

- input and text input polish

## 3.0.1 - 2019-07-18

### Changed

- fixed checkboxField disabled pass through

## 3.0.0 - 2019-06-01

### Changed

- use peer dependencies to reduce package size

## 2.5.0 - 2019-05-29

### Fixed

- undo gatsby compatibility changes because css for react-dates were not loaded (from v2.3.1)

## 2.4.0 - 2019-05-29

### Added

- add/subtract toggle

## 2.3.2 - 2019-05-24

### Fixed

- release issue

## 2.3.1 - 2019-05-24

### Fixed

- compatible with gatsby

## 2.3.0 - 2019-05-24

### Added

- form elements accept stripped attribute which adjusts their spacing and hides their labels

### Fixed

- DatePicker accepts openDirection and disabled
- DatePicker z-index issue

## 2.2.4 - 2019-04-15

### Changed

- gave dateRangePicker openDirection
- remove empty label on dateRangePicker

## 2.2.3 - 2019-03-12

### Fixed

- positioning of single checkbox field input

## 2.2.2 - 2019-03-11

### Fixed

- masking input error

## 2.2.1 - 2019-03-08

### Fixed

- error about passing prop to DOM element

## 2.2.0 - 2019-03-08

### Added

- additional validation
- dynamic password progress indicator
- show/hide password

## 2.1.2 - 2019-03-04

### Fixed

- forgot to run build, rebuild package with new changes

## 2.1.1 - 2019-03-04

### Fixed

- rebuild package with new changes

## 2.1.0 - 2019-03-04

### Updated

- extract single checkbox field
- add label to checkbox group and radio button
- add error message support to checkboxes

## 2.0.0 - 2019-02-22

### Changed

- refactored layout for fields

## 1.13.1 - 2019-02-07

### Updated

- add missing key to checkbox group
- build and publish to include the checkboxGroup

## 1.13.0 - 2019-02-07

### Updated

- add checkboxGroup component

## 1.12.0 - 2019-02-06

### Updated

- refactor radiobutton component

## 1.11.0 - 2018-12-21

### Updated

- styles on daterangepicker are less likely to wrap at narrower widths

## 1.10.1 - 2019-1-3

### Updated

- update version

## 1.10.0 - 2018-12-21

### Updated

- add disabled prop to checkbox component

## 1.9.0 - 2018-12-11

### Fixed

- allow passing a custom date formatter string to datepicker

## 1.8.1 - 2018-12-4

### Fixed

- build issue

## 1.8.0 - 2018-12-3

### Added

- disabled prop for dropdown

## 1.7.0 - 2018-11-26

### Added

- Tooltip to input field

## 1.6.0 - 2018-11-12

### Fixed

- fix dropdown issues on mobile/windows

## 1.5.0 - 2018-11-9

### Changed

- location autocomplete z-index fix

## 1.4.0 - 2018-10-25

### Changed

- change dropdown to use react-select instead of react-styled-select
- update dropdown styles

## 1.3.0 - 2018-10-25

### Changed

- updated datepicker styling to match the design specifications

## 1.2.0 - 2018-10-17

### Added

- disabled flag

## 1.1.0 - 2018-10-10

### Added

- locationAutcomplete component

## 1.0.1 - 2018-09-14

### Changed

- newer version of react-styled-select doesnt break tests in consumer projects

## 1.0.0 - 2018-09-14

### Changed

- styled-components as an external dependency

## 0.10.0 - 2018-08-02

### Added

- normalizers and validations
- test for text area

## 0.9.0 - 2018-07-19

### Fixed

- datepicker and daterangepicker now set the value to the start of the selected day

## 0.8.8 - 2018-06-07

### Fixed

- checkbox component wasn't hooked up correctly and now it is

## 0.8.7 - 2018-05-14

### Changed

- made all dependencies dev dependencies because we build before publishing

## 0.8.6 - 2018-05-14

### Changed

- Remove z-indexing from form components to fix myriad of visual issues

## 0.8.2 - 2018-05-02

### Changed

- No logo in progress bar

## 0.8.1 - 2018-05-01

### Changed

- Ratings component styles

## 0.8.0 - 2018-05-01

### Added

- Ratings component

## 0.7.3 - 2018-04-18

### Refactored

- ToggleButtons
- Spreading props to input

## 0.7.2 - 2018-04-13

### Added

- ToggleButtons

## 0.7.1 - 2018-04-11

### Changed

- Styled date picker and added date range picker.

## 0.7.0 - 2018-03-21

### Changed

- Added all form components to exports.

## 0.6.1 - 2018-03-19

### Changed

- Allow datepicker to accept props for `react-datepicker`

## 0.6.0 - 2018-03-06

### Changed

- Readme updated the Updating library section

## 0.5.0 - 2018-03-06

### Changed

- Fixed validations for Dropdown
- Added Datepicker component

## 0.4.0 - 2018-03-06

### Changed

- Multi select option
- Input types

## 0.3.0 - 2018-02-27

### Changed

- Webpack prod config
- Exports in lib

## 0.2.0 - 2018-02-26

### Added

- This CHANGELOG file to serve as an evolving documentation of changes
- added dropdown back into `Fieldset`

### Changed

- README to document how publish a release
- `webpack.config.prod.js` to not build source-maps and `index.html` file in production
- `react-styled-select` dependency to fix issues with Jest
- demo constant file

### Removed

- `demo.js` file from `scripts` directory
- unnecessary constants files in `demo/`

## 0.1.0 - 2018-02-22

### Added

- Initial release of library
