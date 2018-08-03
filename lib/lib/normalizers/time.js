'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var normalizeTime = exports.normalizeTime = function normalizeTime(value) {
  if (!value) {
    return value;
  }

  var numbers = value.replace(/[^\d]/g, ''); // only integers
  var hours = numbers.slice(0, 2);
  var minutes = numbers.slice(2, 4);

  if (numbers.length <= 2) {
    return numbers;
  }

  if (numbers.length === 3) {
    hours = numbers.slice(0, 1);
    minutes = numbers.slice(1, 3);
  }

  return hours + ':' + minutes;
};

exports.default = normalizeTime;