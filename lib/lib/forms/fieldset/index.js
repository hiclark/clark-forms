'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    flex-direction: row;\n    display: flex;\n  '], ['\n    flex-direction: row;\n    display: flex;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('redux-form');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _radioButton = require('../radio-button');

var _radioButton2 = _interopRequireDefault(_radioButton);

var _dropdown = require('../dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _textarea = require('../textarea');

var _textarea2 = _interopRequireDefault(_textarea);

var _datepicker = require('../datepicker');

var _datepicker2 = _interopRequireDefault(_datepicker);

var _dateRangePicker = require('../date-range-picker');

var _dateRangePicker2 = _interopRequireDefault(_dateRangePicker);

var _toggleButton = require('../toggle-button');

var _toggleButton2 = _interopRequireDefault(_toggleButton);

var _rating = require('../rating');

var _rating2 = _interopRequireDefault(_rating);

var _mediaQueries = require('../../styles/media-queries');

var _mediaQueries2 = _interopRequireDefault(_mediaQueries);

var _spacing = require('../../styles/spacing');

var _typeScale = require('../../styles/type-scale');

var _fontWeight = require('../../styles/font-weight');

var _colors = require('../../styles/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint react/no-array-index-key: 0 */
/* eslint no-shadow: 0 */


var mapFieldToComponent = function mapFieldToComponent(type) {
  var components = {
    input: _input2.default,
    radioButton: _radioButton2.default,
    checkbox: _checkbox2.default,
    dropdown: _dropdown2.default,
    textarea: _textarea2.default,
    datepicker: _datepicker2.default,
    daterangepicker: _dateRangePicker2.default,
    toggleButton: _toggleButton2.default,
    rating: _rating2.default
  };

  return components[type];
};

var composeComponent = function composeComponent(index, field, columns) {
  var type = field.type,
      name = field.name;

  var FieldComponent = mapFieldToComponent(type);
  return _react2.default.createElement(FieldComponent, Object.assign({ key: name, index: index, columns: columns }, field));
};

var Fieldset = function Fieldset(_ref) {
  var data = _ref.data;
  return _react2.default.createElement(
    'div',
    null,
    data.map(function (object) {
      return object.fieldSet.map(function (fieldSet, index) {
        var fields = fieldSet.fields,
            title = fieldSet.title,
            columns = fieldSet.columns,
            subCopy = fieldSet.subCopy;

        return _react2.default.createElement(
          'div',
          { key: index },
          title && _react2.default.createElement(
            FieldsetTitle,
            null,
            title
          ),
          _react2.default.createElement(
            FieldsetContainer,
            {
              key: index,
              columnsSmall: columns.small,
              columnsLarge: columns.large
            },
            fields.map(function (field, index) {
              return _react2.default.createElement(
                Field,
                {
                  key: index,
                  columnsSmall: columns.small,
                  columnsLarge: columns.large,
                  type: field.type
                },
                composeComponent(index, field, columns)
              );
            })
          ),
          subCopy && _react2.default.createElement(
            FieldsetSubCopy,
            null,
            subCopy
          )
        );
      });
    })
  );
};

exports.default = Fieldset;


var calculateWidth = function calculateWidth(columns, type) {
  if (type === 'radioButton') {
    return 'width: ' + (100 / columns - 2) + '%;';
  }

  return 'width: ' + 100 / columns + '%;';
};

var FieldsetContainer = _styledComponents2.default.div.withConfig({
  displayName: 'fieldset__FieldsetContainer'
})(['display:', ';justify-content:space-between;', ';'], function (props) {
  return props.columnsSmall === 1 ? 'block' : 'flex';
}, _mediaQueries2.default.small(_templateObject));

var FieldsetTitle = _styledComponents2.default.h3.withConfig({
  displayName: 'fieldset__FieldsetTitle'
})(['', ';color:', ';display:block;'], _typeScale.TYPE_SCALE_F4, _colors.CLARK_SECONDARY);

var Field = _styledComponents2.default.div.withConfig({
  displayName: 'fieldset__Field'
})(['', ';margin-bottom:calc(', ' + ', ');'], function (props) {
  return calculateWidth(props.columnsSmall, props.type);
}, _spacing.SPACING_SMALL, _spacing.SPACING_MEDIUM);

var FieldsetSubCopy = _styledComponents2.default.p.withConfig({
  displayName: 'fieldset__FieldsetSubCopy'
})(['', ';', ';color:', ';margin:-', ' 0 calc(', ' + ', ') 0;'], _typeScale.TYPE_SCALE_F6, _fontWeight.FONT_WEIGHT_100, _colors.CLARK_SECONDARY, _spacing.SPACING_MEDIUM, _spacing.SPACING_SMALL, _spacing.SPACING_MEDIUM);