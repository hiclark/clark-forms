'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _demo = require('../../constants/demo');

var _demo2 = _interopRequireDefault(_demo);

var _lib = require('../../../lib');

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
var handleClick = function handleClick() {
  console.log('demo');
};

var Demo = function Demo(_ref) {
  var handleSubmit = _ref.handleSubmit,
      pristine = _ref.pristine;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'form',
      { onSubmit: handleSubmit(handleClick) },
      _react2.default.createElement(_lib2.default, { data: _demo2.default }),
      _react2.default.createElement(
        'button',
        { disabled: pristine },
        'Next'
      )
    )
  );
};

exports.default = (0, _reduxForm.reduxForm)({
  form: 'demo',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(Demo);