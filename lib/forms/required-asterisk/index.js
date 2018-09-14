'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require('../../styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Asterisk = function Asterisk() {
  return _react2.default.createElement(
    RequiredAsterisk,
    null,
    '*'
  );
};

exports.default = Asterisk;


var RequiredAsterisk = _styledComponents2.default.span.withConfig({
  displayName: 'required-asterisk__RequiredAsterisk'
})(['color:', ';padding-left:4px;'], _colors.CLARK_PRIMARY);