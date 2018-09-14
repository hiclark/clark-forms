'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require('../../styles/colors');

var _fontWeight = require('../../styles/font-weight');

var _typeScale = require('../../styles/type-scale');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function Error(_ref) {
  var touched = _ref.touched,
      error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    touched && error && _react2.default.createElement(
      ErrorStyle,
      null,
      error
    )
  );
};

var ErrorStyle = _styledComponents2.default.span.withConfig({
  displayName: 'error__ErrorStyle'
})(['', ';', ';color:', ';'], _fontWeight.FONT_WEIGHT_100, _typeScale.TYPE_SCALE_F6, _colors.CLARK_PRIMARY);

exports.default = Error;