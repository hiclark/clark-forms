'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _arrowLeft = require('./arrow-left.svg');

var _arrowLeft2 = _interopRequireDefault(_arrowLeft);

var _colors = require('../../../styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BackArrow = function BackArrow(_ref) {
  var onClick = _ref.onClick;
  return _react2.default.createElement(
    BackIcon,
    { onClick: onClick },
    _react2.default.createElement(_arrowLeft2.default, null)
  );
};

exports.default = BackArrow;


var BackIcon = _styledComponents2.default.div.withConfig({
  displayName: 'back-arrow__BackIcon'
})(['color:', ';cursor:pointer;height:17px;width:20px;'], _colors.CLARK_PRIMARY);