'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderBorderRadius = exports.BORDER_WIDTH_3 = exports.BORDER_WIDTH_2 = exports.BORDER_WIDTH_1 = undefined;

var _templateObject = _taggedTemplateLiteral(['\n        ', ';\n      '], ['\n        ', ';\n      ']),
    _templateObject2 = _taggedTemplateLiteral(['\n          ', ';\n      '], ['\n          ', ';\n      ']);

var _styledComponents = require('styled-components');

var _mediaQueries = require('./media-queries');

var _mediaQueries2 = _interopRequireDefault(_mediaQueries);

var _borderRadius = require('./border-radius');

var _spacing = require('./spacing');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BORDER_WIDTH_1 = exports.BORDER_WIDTH_1 = '1px';
var BORDER_WIDTH_2 = exports.BORDER_WIDTH_2 = '2px';
var BORDER_WIDTH_3 = exports.BORDER_WIDTH_3 = '3px';

var renderBorderRadiusSides = function renderBorderRadiusSides(index, column) {
  if (index === 1) {
    return (0, _styledComponents.css)(['border-radius:', ' 0 0 ', ';margin-right:-', ';'], _spacing.SPACING_EXTRA_SMALL, _spacing.SPACING_EXTRA_SMALL, BORDER_WIDTH_1);
  } else if (index === column) {
    return (0, _styledComponents.css)(['border-radius:0 ', ' ', ' 0;margin-left:-', ';'], _spacing.SPACING_EXTRA_SMALL, _spacing.SPACING_EXTRA_SMALL, BORDER_WIDTH_1);
  }
  return (0, _styledComponents.css)(['border-radius:0;margin-left:-', ';width:101%;'], BORDER_WIDTH_1);
};

var renderBorderRadius = exports.renderBorderRadius = function renderBorderRadius(_ref) {
  var _ref$columns = _ref.columns,
      small = _ref$columns.small,
      large = _ref$columns.large,
      index = _ref.index;

  var indexBaseOne = index + 1;

  if (small > 1) {
    return (0, _styledComponents.css)(['', ';', ';'], renderBorderRadiusSides(indexBaseOne, small), _mediaQueries2.default.small(_templateObject, renderBorderRadiusSides(indexBaseOne, small)));
  } else if (large > 1) {
    return (0, _styledComponents.css)(['', ';'], _mediaQueries2.default.small(_templateObject2, renderBorderRadiusSides(indexBaseOne, large)));
  }

  return (0, _styledComponents.css)(['', ';'], _borderRadius.BORDER_RADIUS_F2);
};