'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isRequired = exports.isRequired = function isRequired(value) {
  return value && value !== '$' ? undefined : 'Required';
};

var length = exports.length = function length(targetLength) {
  return function (value) {
    return value && value.length !== targetLength ? 'Must be ' + targetLength + ' characters' : undefined;
  };
};

var maxLength = exports.maxLength = function maxLength(max) {
  return function (value) {
    return value && value.length > max ? 'Must be ' + max + ' characters or less' : undefined;
  };
};

var minLength = exports.minLength = function minLength(min) {
  return function (value) {
    return value && value.length < min ? 'Must be ' + min + ' characters or more' : undefined;
  };
};

var isNumber = exports.isNumber = function isNumber(value) {
  return value && !value.match(/^[0-9]+$/) ? 'Must be a number' : undefined;
};

var isMoney = exports.isMoney = function isMoney(value) {
  return value && !value.match(/^[$]?[0-9]+([.]{1}[0-9]{2})?$/) ? 'Must be a dollar value (ex. 45.50)' : undefined;
};

var isEmail = exports.isEmail = function isEmail(value) {
  return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
};

var isPhoneNumber = exports.isPhoneNumber = function isPhoneNumber(value) {
  return value && !/^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/i.test(value) ? 'Invalid phone number, must be 10 digits' : undefined;
};

var isTime = exports.isTime = function isTime(value) {
  return value && !/^(10|11|12|[1-9]):[0-5][0-9]$/.test(value) ? 'Invalid time' : undefined;
};

var isDivisibleBy = exports.isDivisibleBy = function isDivisibleBy(divisor) {
  return function (value) {
    return value && value % 0.25 !== 0 ? 'Must be divisible by ' + divisor : undefined;
  };
};

var isPositive = exports.isPositive = function isPositive(value) {
  return value && value <= 0 ? 'Must be a positive number' : undefined;
};