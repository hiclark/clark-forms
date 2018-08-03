'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _requiredAsterisk = require('../required-asterisk');

var _requiredAsterisk2 = _interopRequireDefault(_requiredAsterisk);

var _colors = require('../../styles/colors');

var _spacing = require('../../styles/spacing');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = function Label(_ref) {
  var name = _ref.name,
      label = _ref.label,
      required = _ref.required;
  return _react2.default.createElement(
    Wrap,
    { htmlFor: name },
    label || _react2.default.createElement(Spacing, null),
    required && _react2.default.createElement(_requiredAsterisk2.default, null)
  );
};

exports.default = Label;


var Wrap = _styledComponents2.default.label.withConfig({
  displayName: 'label__Wrap'
})(['color:', ';display:block;margin-bottom:', ';'], _colors.CLARK_SECONDARY, _spacing.SPACING_SMALL);

var Spacing = _styledComponents2.default.span.withConfig({
  displayName: 'label__Spacing'
})(['display:inline-block;']);