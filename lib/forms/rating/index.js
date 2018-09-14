'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _spacing = require('../../styles/spacing');

var _fontWeight = require('../../styles/font-weight');

var _typeScale = require('../../styles/type-scale');

var _colors = require('../../styles/colors');

var _borderRadius = require('../../styles/border-radius');

var _borders = require('../../styles/borders');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Rating = function Rating(_ref) {
  var name = _ref.name,
      values = _ref.values,
      icon = _ref.icon,
      input = _ref.input,
      _ref$ratingKey = _ref.ratingKey,
      left = _ref$ratingKey.left,
      right = _ref$ratingKey.right;
  return _react2.default.createElement(
    RatingContainer,
    null,
    _react2.default.createElement(
      RatingKeys,
      null,
      _react2.default.createElement(
        RatingKey,
        null,
        left
      ),
      _react2.default.createElement(
        RatingKey,
        null,
        right
      )
    ),
    _react2.default.createElement(
      RatingContent,
      null,
      values.map(function (_ref2) {
        var value = _ref2.value,
            label = _ref2.label;

        var isSelected = value === input.value;
        var onClickHandler = function onClickHandler() {
          var newValue = isSelected ? null : value;
          input.onChange(newValue);
        };
        return _react2.default.createElement(
          'div',
          { key: value },
          _react2.default.createElement(
            RadioButton,
            { selected: isSelected, onClick: onClickHandler },
            _react2.default.createElement(
              Icon,
              { selected: isSelected },
              icon
            )
          ),
          _react2.default.createElement(
            Label,
            { htmlFor: name },
            label
          )
        );
      })
    )
  );
};

var RatingField = function RatingField(props) {
  return _react2.default.createElement(_reduxForm.Field, Object.assign({ component: Rating }, props));
};

exports.default = RatingField;


var RATING_BACKGROUND_LEFT = '#f7fafc';
var RATING_BACKGROUND_RIGHT = '#fffaf8';

var RatingContainer = _styledComponents2.default.div.withConfig({
  displayName: 'rating__RatingContainer'
})(['background-image:linear-gradient( to right,', ',', ' );padding:', ';'], RATING_BACKGROUND_LEFT, RATING_BACKGROUND_RIGHT, _spacing.SPACING_MEDIUM);

var RatingKeys = _styledComponents2.default.div.withConfig({
  displayName: 'rating__RatingKeys'
})(['display:flex;justify-content:space-between;width:100%;']);

var RatingKey = _styledComponents2.default.h6.withConfig({
  displayName: 'rating__RatingKey'
})(['', ';color:', ';margin:0 0 ', ' 0;'], _typeScale.TYPE_SCALE_F6, _colors.CLARK_SECONDARY, _spacing.SPACING_MEDIUM);

var RatingContent = _styledComponents2.default.div.withConfig({
  displayName: 'rating__RatingContent'
})(['align-items:center;display:flex;justify-content:space-between;text-align:center;']);

var RadioButton = _styledComponents2.default.div.withConfig({
  displayName: 'rating__RadioButton'
})(['', ';align-items:center;background-color:', ';border:', ' solid ', ';color:', ';cursor:pointer;display:flex;height:35px;width:35px;transition:all 0.25s ease-in-out;', ';'], _borderRadius.BORDER_RADIUS_100, _colors.WHITE, _borders.BORDER_WIDTH_1, _colors.CLARK_PRIMARY, _colors.CLARK_PRIMARY, function (_ref3) {
  var selected = _ref3.selected;
  return selected && '\n    background-color: ' + _colors.CLARK_PRIMARY + ';\n    color: white;\n  ';
});

var Icon = _styledComponents2.default.span.withConfig({
  displayName: 'rating__Icon'
})(['color:inherit;line-height:0;margin:0 auto;opacity:0;width:50%;', ';'], function (_ref4) {
  var selected = _ref4.selected;
  return selected && '\n    opacity: 1;\n  ';
});

var Label = _styledComponents2.default.label.withConfig({
  displayName: 'rating__Label'
})(['', ';', ';color:', ';display:block;margin-top:', ';'], _typeScale.TYPE_SCALE_F5, _fontWeight.FONT_WEIGHT_100, _colors.GREY_50, _spacing.SPACING_MEDIUM);