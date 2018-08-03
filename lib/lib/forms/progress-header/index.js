'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    display: none;\n  '], ['\n    display: none;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _backArrow = require('./back-arrow');

var _backArrow2 = _interopRequireDefault(_backArrow);

var _mediaQueries = require('../../styles/media-queries');

var _mediaQueries2 = _interopRequireDefault(_mediaQueries);

var _colors = require('../../styles/colors');

var _spacing = require('../../styles/spacing');

var _fontWeight = require('../../styles/font-weight');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProgressHeader = function ProgressHeader(_ref) {
  var currentPosition = _ref.currentPosition,
      maxPosition = _ref.maxPosition,
      title = _ref.title,
      handleBackLinkClick = _ref.handleBackLinkClick,
      handleCancelClick = _ref.handleCancelClick;
  return _react2.default.createElement(
    Header,
    null,
    _react2.default.createElement(
      Container,
      null,
      handleBackLinkClick && _react2.default.createElement(
        BackIconWrapper,
        null,
        _react2.default.createElement(_backArrow2.default, { onClick: handleBackLinkClick })
      ),
      currentPosition && maxPosition && title && _react2.default.createElement(
        Title,
        null,
        'Step ' + currentPosition + '/' + maxPosition + ': ' + title
      ),
      handleCancelClick && _react2.default.createElement(
        CancelBtn,
        { onClick: handleCancelClick },
        'Cancel'
      )
    ),
    currentPosition && maxPosition && _react2.default.createElement(
      ProgressBar,
      null,
      _react2.default.createElement(ProgressBarProgress, { percentCovered: currentPosition / maxPosition * 100 })
    )
  );
};

exports.default = ProgressHeader;


var Header = _styledComponents2.default.header.withConfig({
  displayName: 'progress-header__Header'
})(['background-color:', ';'], _colors.WHITE);

var Container = _styledComponents2.default.div.withConfig({
  displayName: 'progress-header__Container'
})(['align-items:center;display:flex;height:', ';padding:0 calc(', ' + ', ');'], _spacing.SPACING_EXTRA_LARGE, _spacing.SPACING_SMALL, _spacing.SPACING_MEDIUM);

var ProgressBar = _styledComponents2.default.div.withConfig({
  displayName: 'progress-header__ProgressBar'
})(['background-color:', ';height:4px;width:100%;'], _colors.GREY_25);

var ProgressBarProgress = _styledComponents2.default.div.withConfig({
  displayName: 'progress-header__ProgressBarProgress'
})(['background-color:', ';width:', '%;height:100%;}'], _colors.CLARK_PRIMARY, function (props) {
  return props.percentCovered;
});

var BackIconWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'progress-header__BackIconWrapper'
})(['', ';margin-right:', ';'], _mediaQueries2.default.small(_templateObject), _spacing.SPACING_LARGE);

var Title = _styledComponents2.default.div.withConfig({
  displayName: 'progress-header__Title'
})(['color:', ';', ';text-align:center;'], _colors.GREY_75, _fontWeight.FONT_WEIGHT_100);

var CancelBtn = _styledComponents2.default.div.withConfig({
  displayName: 'progress-header__CancelBtn'
})(['color:', ';', ';margin-left:auto;'], _colors.CLARK_PRIMARY, _fontWeight.FONT_WEIGHT_100);