'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var sizes = {
  large: 1280,
  medium: 1024,
  small: 768
};

var media = Object.keys(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return (0, _styledComponents.css)(['@media (min-width:', 'em){', ';}'], sizes[label] / 16, _styledComponents.css.apply(undefined, arguments));
  };

  return acc;
}, {});

exports.default = media;