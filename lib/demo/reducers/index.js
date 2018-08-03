'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxForm = require('redux-form');

var rootReducer = (0, _redux.combineReducers)({
  form: _reduxForm.reducer
});

exports.default = rootReducer;