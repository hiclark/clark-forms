'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _reactStyledSelect = require('react-styled-select');

var _reactStyledSelect2 = _interopRequireDefault(_reactStyledSelect);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _error = require('../error');

var _error2 = _interopRequireDefault(_error);

var _colors = require('../../styles/colors');

var _borderRadius = require('../../styles/border-radius');

var _typeScale = require('../../styles/type-scale');

var _fontFamily = require('../../styles/font-family');

var _fontWeight = require('../../styles/font-weight');

var _borders = require('../../styles/borders');

var _label = require('../label');

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderDropdown = function renderDropdown(_ref) {
  var input = _ref.input,
      index = _ref.index,
      options = _ref.options,
      placeholder = _ref.placeholder,
      columns = _ref.columns,
      multi = _ref.multi,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(DropdownSelect, Object.assign({}, input, {
      index: index,
      multi: multi,
      options: options,
      onChange: input.onChange,
      placeholder: placeholder,
      columns: columns,
      classes: {
        selectControl: 'select__control',
        selectMultiValueWrapper: 'select__multi-value-wrapper',
        selectPlaceholder: 'select__placeholder',
        selectValue: 'select__value',
        selectValueLabel: 'select__value-label',
        selectArrow: 'select__arrow',
        selectOption: 'select__option'
      }
    })),
    _react2.default.createElement(_error2.default, { touched: touched, error: error })
  );
};

var Dropdown = function Dropdown(_ref2) {
  var index = _ref2.index,
      name = _ref2.name,
      label = _ref2.label,
      values = _ref2.values,
      placeholder = _ref2.placeholder,
      columns = _ref2.columns,
      validate = _ref2.validate,
      multi = _ref2.multi,
      required = _ref2.required,
      onChange = _ref2.onChange;
  return _react2.default.createElement(
    DropdownContainer,
    null,
    _react2.default.createElement(_label2.default, { name: name, label: label, required: required }),
    _react2.default.createElement(_reduxForm.Field, {
      index: index,
      name: name,
      multi: multi,
      component: renderDropdown,
      options: values,
      columns: columns,
      validate: validate,
      onChange: onChange,
      placeholder: placeholder
    })
  );
};

exports.default = Dropdown;


var DropdownContainer = _styledComponents2.default.div.withConfig({
  displayName: 'dropdown__DropdownContainer'
})(['display:block;']);

var DropdownSelect = (0, _styledComponents2.default)(_reactStyledSelect2.default).withConfig({
  displayName: 'dropdown__DropdownSelect'
})(['', ';border:', ' solid ', ';display:block;outline:none;width:100%;', ';.select__control{background-color:', ';border:0;cursor:pointer;padding:0.6rem;line-height:0;}.select__multi-value-wrapper{padding:0;}.select__value{line-height:1;padding:0;}.select__value-label{', ';', ';', ';color:', ';}.select__placeholder{', ';', ';', ';color:', ';line-height:1;padding:0;position:relative;}.select__arrow{border-color:', ';border-width:', ';transition:all 0.25s ease-in-out;}.select__option{', ';', ';', ';background-color:', ';color:', ';transition:all 0.25s ease-in-out;}'], _borderRadius.BORDER_RADIUS_F2, _borders.BORDER_WIDTH_1, _colors.GREY_25, function (props) {
  return (0, _borders.renderBorderRadius)(props);
}, _colors.TRANSPARENT, _typeScale.TYPE_SCALE_F4, _fontFamily.FONT_FAMILY_PRIMARY, _fontWeight.FONT_WEIGHT_100, _colors.CLARK_SECONDARY, _typeScale.TYPE_SCALE_F4, _fontFamily.FONT_FAMILY_PRIMARY, _fontWeight.FONT_WEIGHT_100, _colors.GREY_25, _colors.CLARK_PRIMARY, _borders.BORDER_WIDTH_2, _typeScale.TYPE_SCALE_F4, _fontFamily.FONT_FAMILY_PRIMARY, _fontWeight.FONT_WEIGHT_100, _colors.WHITE, _colors.CLARK_SECONDARY);