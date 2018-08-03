'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var normalizeDate = exports.normalizeDate = function normalizeDate(value) {
  if (!value) {
    return value;
  }

  var onlyNums = value.replace(/[^\d]/g, '');

  if (onlyNums.length <= 2) {
    return onlyNums;
  }

  if (onlyNums.length <= 4) {
    return onlyNums.slice(0, 2) + '/' + onlyNums.slice(2);
  }

  return onlyNums.slice(0, 2) + '/' + onlyNums.slice(2, 4) + '/' + onlyNums.slice(4, 8);
};

exports.default = normalizeDate;