'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var normalizeNumbers = exports.normalizeNumbers = function normalizeNumbers(max) {
  return function (value) {
    if (!value) {
      return value;
    }

    var numbers = value.replace(/[^\d]/g, ''); // only integers
    return numbers.length > max ? numbers.substr(0, max) : numbers; // set maxLength
  };
};

exports.default = normalizeNumbers;