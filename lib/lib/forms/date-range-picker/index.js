'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateRangePickerField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var _error = require('../error');

var _error2 = _interopRequireDefault(_error);

var _label = require('../label');

var _label2 = _interopRequireDefault(_label);

require('./react-dates-overrides');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateRangePickerField = exports.DateRangePickerField = function (_PureComponent) {
  _inherits(DateRangePickerField, _PureComponent);

  function DateRangePickerField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DateRangePickerField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateRangePickerField.__proto__ || Object.getPrototypeOf(DateRangePickerField)).call.apply(_ref, [this].concat(args))), _this), _this.state = { focusedInput: null }, _this.handleFocusChange = function (focusedInput) {
      return _this.setState({ focusedInput: focusedInput });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DateRangePickerField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$meta = _props.meta,
          error = _props$meta.error,
          touched = _props$meta.touched,
          _props$input = _props.input,
          _props$input$value = _props$input.value;
      _props$input$value = _props$input$value === undefined ? { startDate: null, endDate: null } : _props$input$value;
      var startDate = _props$input$value.startDate,
          endDate = _props$input$value.endDate,
          onChange = _props$input.onChange,
          isOutsideRange = _props.isOutsideRange;
      var focusedInput = this.state.focusedInput;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactDates.DateRangePicker, {
          startDate: startDate ? (0, _moment2.default)(startDate) : null,
          endDate: endDate ? (0, _moment2.default)(endDate) : null,
          endDateId: 'endDate',
          endDatePlaceholderText: 'End Date',
          focusedInput: focusedInput,
          onDatesChange: function onDatesChange(newDates) {
            return onChange({
              startDate: newDates.startDate ? newDates.startDate.startOf('day').toISOString() : null,
              endDate: newDates.endDate ? newDates.endDate.startOf('day').toISOString() : null
            });
          },
          onFocusChange: this.handleFocusChange,
          startDateId: 'startDate',
          startDatePlaceholderText: 'Start Date',
          showDefaultInputIcon: true,
          hideKeyboardShortcutsPanel: true,
          isOutsideRange: isOutsideRange && function (momentObject) {
            return isOutsideRange(momentObject.startOf('day'));
          }
        }),
        _react2.default.createElement(_error2.default, { touched: touched, error: error })
      );
    }
  }]);

  return DateRangePickerField;
}(_react.PureComponent);

var RangePicker = function RangePicker(_ref2) {
  var name = _ref2.name,
      label = _ref2.label,
      columns = _ref2.columns,
      validate = _ref2.validate,
      required = _ref2.required,
      props = _objectWithoutProperties(_ref2, ['name', 'label', 'columns', 'validate', 'required']);

  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(_label2.default, { name: name, label: label, required: required }),
    _react2.default.createElement(_reduxForm.Field, Object.assign({
      name: name,
      component: DateRangePickerField,
      columns: columns,
      validate: validate
    }, props))
  );
};

exports.default = RangePicker;


var Container = _styledComponents2.default.div.withConfig({
  displayName: 'date-range-picker__Container'
})(['display:block;']);