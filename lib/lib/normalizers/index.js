'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _date = require('./date');

Object.defineProperty(exports, 'normalizeDate', {
  enumerable: true,
  get: function get() {
    return _date.normalizeDate;
  }
});

var _number = require('./number');

Object.defineProperty(exports, 'normalizeNumbers', {
  enumerable: true,
  get: function get() {
    return _number.normalizeNumbers;
  }
});

var _phone = require('./phone');

Object.defineProperty(exports, 'normalizePhone', {
  enumerable: true,
  get: function get() {
    return _phone.normalizePhone;
  }
});

var _time = require('./time');

Object.defineProperty(exports, 'normalizeTime', {
  enumerable: true,
  get: function get() {
    return _time.normalizeTime;
  }
});