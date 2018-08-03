'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _toggleOff = require('./toggle-off.svg');

var _toggleOff2 = _interopRequireDefault(_toggleOff);

var _toggleOn = require('./toggle-on.svg');

var _toggleOn2 = _interopRequireDefault(_toggleOn);

var _spacing = require('../../styles/spacing');

var _colors = require('../../styles/colors');

var _fontWeight = require('../../styles/font-weight');

var _requiredAsterisk = require('../required-asterisk');

var _requiredAsterisk2 = _interopRequireDefault(_requiredAsterisk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderField = function renderField(_ref) {
  var required = _ref.required,
      index = _ref.index,
      label = _ref.label,
      _ref$input = _ref.input,
      name = _ref$input.name,
      checked = _ref$input.checked,
      onChange = _ref$input.onChange;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      HiddenField,
      null,
      _react2.default.createElement(_reduxForm.Field, {
        id: name + '-' + index,
        name: name,
        component: 'input',
        value: checked,
        type: 'checkbox',
        index: index
      })
    ),
    _react2.default.createElement(
      'label',
      { htmlFor: name + '-' + index, onClick: onChange, onKeyDown: onChange },
      _react2.default.createElement(
        CheckboxLabel,
        null,
        checked ? _react2.default.createElement(_toggleOn2.default, null) : _react2.default.createElement(_toggleOff2.default, null),
        _react2.default.createElement(
          LabelText,
          null,
          label,
          required && _react2.default.createElement(_requiredAsterisk2.default, null)
        )
      )
    )
  );
}; /* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */

var Checkbox = function Checkbox(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reduxForm.Field, Object.assign({ component: renderField }, props))
  );
};

exports.default = Checkbox;


var HiddenField = _styledComponents2.default.div.withConfig({
  displayName: 'checkbox__HiddenField'
})(['display:none;']);

var CheckboxLabel = _styledComponents2.default.div.withConfig({
  displayName: 'checkbox__CheckboxLabel'
})(['cursor:pointer;display:flex;flex-direction:row;align-items:center;']);

var LabelText = _styledComponents2.default.p.withConfig({
  displayName: 'checkbox__LabelText'
})(['', ';color:', ';margin-left:', ';'], _fontWeight.FONT_WEIGHT_100, _colors.GREY_75, _spacing.SPACING_SMALL);