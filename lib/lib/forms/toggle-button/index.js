'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _label = require('../label');

var _label2 = _interopRequireDefault(_label);

var _error = require('../error');

var _error2 = _interopRequireDefault(_error);

var _typeScale = require('../../styles/type-scale');

var _spacing = require('../../styles/spacing');

var _borderRadius = require('../../styles/border-radius');

var _colors = require('../../styles/colors');

var _fontWeight = require('../../styles/font-weight');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleButton = function ToggleButton(_ref) {
  var values = _ref.values,
      input = _ref.input,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      ButtonContainer,
      null,
      values.map(function (_ref2) {
        var value = _ref2.value,
            label = _ref2.label;

        var isSelected = value === input.value;
        var onClick = function onClick() {
          var newValue = isSelected ? null : value;
          input.onChange(newValue);
        };
        return _react2.default.createElement(
          Button,
          { key: label, selected: isSelected, onClick: onClick },
          label
        );
      })
    ),
    _react2.default.createElement(_error2.default, { touched: touched, error: error })
  );
};

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_label2.default, { name: props.name, label: props.label, required: props.required }),
    _react2.default.createElement(_reduxForm.Field, Object.assign({ component: ToggleButton }, props))
  );
};

var Button = _styledComponents2.default.div.withConfig({
  displayName: 'toggle-button__Button'
})(['display:inline-flex;align-items:center;justify-content:center;width:100%;text-align:center;cursor:pointer;text-transform:uppercase;color:', ';', ';border-left:1px solid ', ';&:first-child{border:0;}', ';', ';padding:', ';height:44px;'], _colors.CLARK_PRIMARY, function (_ref3) {
  var selected = _ref3.selected;
  return selected && '\n    background-color: ' + _colors.CLARK_PRIMARY + ';\n    color: white;\n  ';
}, _colors.CLARK_PRIMARY, _typeScale.TYPE_SCALE_F4, _fontWeight.FONT_WEIGHT_100, _spacing.SPACING_SMALL);

var ButtonContainer = _styledComponents2.default.div.withConfig({
  displayName: 'toggle-button__ButtonContainer'
})(['border:1px solid ', ';display:flex;flex-direction:row;justify-content:space-between;', ';'], _colors.CLARK_PRIMARY, _borderRadius.BORDER_RADIUS_F2);