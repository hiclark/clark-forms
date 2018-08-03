'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _error = require('../error');

var _error2 = _interopRequireDefault(_error);

var _spacing = require('../../styles/spacing');

var _borderRadius = require('../../styles/border-radius');

var _typeScale = require('../../styles/type-scale');

var _fontFamily = require('../../styles/font-family');

var _fontWeight = require('../../styles/font-weight');

var _borders = require('../../styles/borders');

var _lineHeight = require('../../styles/line-height');

var _colors = require('../../styles/colors');

var _label = require('../label');

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderField = function renderField(_ref) {
  var input = _ref.input,
      index = _ref.index,
      placeholder = _ref.placeholder,
      columns = _ref.columns,
      type = _ref.type,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(FormTextarea, Object.assign({}, input, {
      type: type,
      index: index,
      placeholder: placeholder,
      columns: columns,
      showError: !(error && touched)
    })),
    _react2.default.createElement(_error2.default, { touched: touched, error: error })
  );
};

var Textarea = function Textarea(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_label2.default, { name: props.name, label: props.label, required: props.required }),
    _react2.default.createElement(_reduxForm.Field, Object.assign({ component: renderField }, props))
  );
};

exports.default = Textarea;


var FormTextarea = _styledComponents2.default.textarea.withConfig({
  displayName: 'textarea__FormTextarea'
})(['', ';', ';', ';', ';border:', ' solid ', ';color:', ';display:block;line-height:', ';height:calc(', ' + ', ');padding:calc(', ' + ', ');position:relative;outline:none;resize:none;width:100%;margin-bottom:', ';background-color:', ';transition:0.5s;', ';&::placeholder{color:', ';}'], _typeScale.TYPE_SCALE_F4, _fontFamily.FONT_FAMILY_PRIMARY, _fontWeight.FONT_WEIGHT_100, _borderRadius.BORDER_RADIUS_F2, _borders.BORDER_WIDTH_1, function (props) {
  return props.showError ? _colors.GREY_25 : _colors.CLARK_PRIMARY;
}, _colors.CLARK_SECONDARY, _lineHeight.LINE_HEIGHT_COPY, _spacing.SPACING_MEDIUM, _spacing.SPACING_EXTRA_LARGE, _spacing.SPACING_EXTRA_SMALL, _spacing.SPACING_SMALL, function (props) {
  return props.showError ? 0 : _spacing.SPACING_SMALL;
}, function (props) {
  return props.showError ? _colors.WHITE : _colors.ERROR_PRIMARY;
}, function (props) {
  return (0, _borders.renderBorderRadius)(props);
}, _colors.GREY_25);