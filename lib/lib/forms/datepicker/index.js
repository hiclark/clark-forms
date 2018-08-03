'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleDatePickerField = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('react-dates/initialize');

require('react-dates/lib/css/_datepicker.css');

var _reactDates = require('react-dates');

var _reduxForm = require('redux-form');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _label = require('../label');

var _label2 = _interopRequireDefault(_label);

var _error = require('../error');

var _error2 = _interopRequireDefault(_error);

require('../date-range-picker/react-dates-overrides');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SingleDatePickerField = exports.SingleDatePickerField = function SingleDatePickerField(_ref) {
  var _ref$meta = _ref.meta,
      active = _ref$meta.active,
      error = _ref$meta.error,
      touched = _ref$meta.touched,
      _ref$input = _ref.input,
      _ref$input$value = _ref$input.value,
      value = _ref$input$value === undefined ? null : _ref$input$value,
      onChange = _ref$input.onChange,
      onFocus = _ref$input.onFocus,
      onBlur = _ref$input.onBlur,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === undefined ? 'Select a date' : _ref$placeholder,
      isOutsideRange = _ref.isOutsideRange,
      _ref$numberOfMonths = _ref.numberOfMonths,
      numberOfMonths = _ref$numberOfMonths === undefined ? 1 : _ref$numberOfMonths;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactDates.SingleDatePicker, {
      date: value ? (0, _moment2.default)(value) : null,
      onDateChange: function onDateChange(momentObject) {
        return momentObject ? onChange(momentObject.startOf('day').toISOString()) : onChange(null);
      },
      focused: active,
      onFocusChange: function onFocusChange(_ref2) {
        var focused = _ref2.focused;
        return focused ? onFocus() : onBlur();
      },
      id: 'date',
      placeholder: placeholder,
      showDefaultInputIcon: true,
      hideKeyboardShortcutsPanel: true,
      isOutsideRange: isOutsideRange && function (momentObject) {
        return isOutsideRange(momentObject.startOf('day'));
      },
      numberOfMonths: numberOfMonths
    }),
    _react2.default.createElement(_error2.default, { touched: touched, error: error })
  );
};

var DatePicker = function DatePicker(_ref3) {
  var name = _ref3.name,
      label = _ref3.label,
      columns = _ref3.columns,
      validate = _ref3.validate,
      required = _ref3.required,
      props = _objectWithoutProperties(_ref3, ['name', 'label', 'columns', 'validate', 'required']);

  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(_label2.default, { name: name, label: label, required: required }),
    _react2.default.createElement(_reduxForm.Field, Object.assign({
      name: name,
      component: SingleDatePickerField,
      columns: columns,
      validate: validate
    }, props))
  );
};

exports.default = DatePicker;


var Container = _styledComponents2.default.div.withConfig({
  displayName: 'datepicker__Container'
})(['display:block;']);