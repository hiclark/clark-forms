'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    height: 150px;\n  '], ['\n    height: 150px;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _requiredAsterisk = require('../required-asterisk');

var _requiredAsterisk2 = _interopRequireDefault(_requiredAsterisk);

var _mediaQueries = require('../../styles/media-queries');

var _mediaQueries2 = _interopRequireDefault(_mediaQueries);

var _spacing = require('../../styles/spacing');

var _typeScale = require('../../styles/type-scale');

var _colors = require('../../styles/colors');

var _borderRadius = require('../../styles/border-radius');

var _borders = require('../../styles/borders');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RadioButton = function RadioButton(_ref) {
  var name = _ref.name,
      label = _ref.label,
      index = _ref.index,
      value = _ref.value,
      placeholder = _ref.placeholder,
      icon = _ref.icon,
      required = _ref.required;
  return _react2.default.createElement(
    RadioButtonContainer,
    null,
    _react2.default.createElement(Radio, {
      name: name,
      component: 'input',
      value: value,
      placeholder: placeholder,
      type: 'radio',
      index: index
    }),
    _react2.default.createElement(
      Icon,
      null,
      icon
    ),
    _react2.default.createElement(
      Label,
      { htmlFor: name },
      label,
      required && _react2.default.createElement(_requiredAsterisk2.default, null)
    )
  );
};

exports.default = RadioButton;


var Radio = (0, _styledComponents2.default)(_reduxForm.Field).withConfig({
  displayName: 'radio-button__Radio'
})(['color:', ';appearance:none;bottom:0;cursor:pointer;display:block;left:0;position:absolute;outline:none;margin:0;right:0;top:0;width:100%;transition:all 0.25s ease-in-out;'], _colors.CLARK_TERTIARY);

var RadioButtonContainer = _styledComponents2.default.div.withConfig({
  displayName: 'radio-button__RadioButtonContainer'
})(['', ';align-items:center;border:', ' solid ', ';cursor:pointer;display:flex;flex-direction:column;justify-content:center;height:105px;position:relative;text-align:center;', ';> ', ':checked{background-color:', ';}> ', ':checked ~ label{color:', ';position:relative;}> ', ':checked ~ div{color:', ';position:relative;}'], _borderRadius.BORDER_RADIUS_F3, _borders.BORDER_WIDTH_2, _colors.CLARK_TERTIARY, _mediaQueries2.default.small(_templateObject), Radio, _colors.CLARK_TERTIARY, Radio, _colors.WHITE, Radio, _colors.WHITE);

var Icon = _styledComponents2.default.div.withConfig({
  displayName: 'radio-button__Icon'
})(['color:', ';display:block;margin:0 auto ', ' auto;width:30px;transition:all 0.25s ease-in-out;'], _colors.CLARK_TERTIARY, _spacing.SPACING_SMALL);

var Label = _styledComponents2.default.label.withConfig({
  displayName: 'radio-button__Label'
})(['', ';color:', ';display:block;transition:all 0.25s ease-in-out;'], _typeScale.TYPE_SCALE_F5, _colors.CLARK_TERTIARY);