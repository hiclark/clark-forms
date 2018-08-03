'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('../../../lib');

var _check = require('../../assets/icons/check.svg');

var _check2 = _interopRequireDefault(_check);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DROPDOWN = [{ value: 'first', label: 'First' }, { value: 'second', label: 'Second' }];

var RATING = [{ value: 1, label: '1' }, { value: 2, label: '2' }, { value: 3, label: '3' }, { value: 4, label: '4' }, { value: 5, label: '5' }];

var RATING_KEY = { left: 'Poor', right: 'Excellent' };

var FIELD_SETS = [{
  fieldSet: [{
    columns: { small: 1, large: 2 },
    fields: [{
      type: 'input',
      name: 'firstInput',
      label: 'Required Input',
      required: true,
      validate: [_lib.isRequired, (0, _lib.minLength)(6)]
    }, {
      type: 'dropdown',
      name: 'dropdownTest',
      label: 'Dropdown Test',
      values: DROPDOWN,
      validate: _lib.isRequired
    }, {
      type: 'input',
      name: 'firstInput',
      label: 'Required Input',
      required: true,
      validate: [_lib.isRequired, (0, _lib.minLength)(6)]
    }, {
      type: 'dropdown',
      name: 'multiselectTest',
      label: 'Multiselect Test',
      multi: true,
      values: DROPDOWN,
      validate: _lib.isRequired
    }, {
      type: 'input',
      name: 'pwInput',
      label: 'Password Input',
      inputType: 'password'
    }, {
      type: 'input',
      name: 'secondInput',
      label: 'Number Input',
      inputType: 'number',
      min: 0,
      max: 10
    }]
  }, {
    columns: { small: 1, large: 2 },
    fields: [{
      type: 'datepicker',
      name: 'datePicker',
      label: 'Date Picker',
      validate: [_lib.isRequired],
      showYearDropdown: true,
      showMonthDropdown: true
    }]
  }, {
    columns: { small: 1, large: 2 },
    fields: [{
      type: 'daterangepicker',
      name: 'dateRangePicker',
      label: 'Date Range Picker',
      validate: [_lib.isRequired],
      showYearDropdown: true,
      showMonthDropdown: true
    }]
  }, {
    columns: { small: 2 },
    fields: [{
      type: 'radioButton',
      name: 'accountType',
      label: 'Individual',
      value: 'individual',
      validate: _lib.isRequired
    }, {
      type: 'radioButton',
      name: 'accountType',
      label: 'Business',
      value: 'company',
      validate: _lib.isRequired
    }]
  }, {
    columns: { small: 1, large: 2 },
    fields: [{
      type: 'checkbox',
      name: 'checkbox',
      label: 'Checkbox'
    }]
  }, {
    columns: { small: 1, large: 2 },
    fields: [{
      label: 'Toggle',
      type: 'toggleButton',
      name: 'toggle',
      values: [{ label: 'label1', value: 1 }, { label: 'label2', value: 2 }],
      validate: _lib.isRequired
    }]
  }, {
    columns: { small: 1, large: 2 },
    fields: [{
      type: 'rating',
      name: 'rating',
      values: RATING,
      icon: _react2.default.createElement(_check2.default, null),
      ratingKey: RATING_KEY
    }, {
      type: 'textarea',
      name: 'textArea',
      label: 'Text Area'
    }]
  }]
}];

exports.default = FIELD_SETS;