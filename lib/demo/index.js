'use strict';

var _templateObject = _taggedTemplateLiteral(['\n  @font-face {\n    font-family: \'Graphik\';\n    font-style: normal;\n    font-weight: 100;\n    src: url(', ') format(\'woff2\'),\n         url(', ') format(\'woff\');\n  }\n\n  @font-face {\n    font-family: \'Graphik\';\n    font-style: normal;\n    font-weight: 400;\n    src: url(', ') format(\'woff2\'),\n         url(', ') format(\'woff\');\n  }\n\n  @font-face {\n    font-family: \'Graphik\';\n    font-style: normal;\n    font-weight: 700;\n    src: url(', ') format(\'woff2\'),\n         url(', ') format(\'woff\');\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: 16px;\n    height: 100%;\n  }\n\n  body {\n    font-family: \'Graphik\';\n    margin: 0;\n    position: relative;\n    line-height: 1;\n    min-height: 100%;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n'], ['\n  @font-face {\n    font-family: \'Graphik\';\n    font-style: normal;\n    font-weight: 100;\n    src: url(', ') format(\'woff2\'),\n         url(', ') format(\'woff\');\n  }\n\n  @font-face {\n    font-family: \'Graphik\';\n    font-style: normal;\n    font-weight: 400;\n    src: url(', ') format(\'woff2\'),\n         url(', ') format(\'woff\');\n  }\n\n  @font-face {\n    font-family: \'Graphik\';\n    font-style: normal;\n    font-weight: 700;\n    src: url(', ') format(\'woff2\'),\n         url(', ') format(\'woff\');\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: 16px;\n    height: 100%;\n  }\n\n  body {\n    font-family: \'Graphik\';\n    margin: 0;\n    position: relative;\n    line-height: 1;\n    min-height: 100%;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reactHotLoader = require('react-hot-loader');

var _styledComponents = require('styled-components');

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _registerServiceWorker = require('./registerServiceWorker');

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

var _demo = require('./containers/demo');

var _demo2 = _interopRequireDefault(_demo);

var _GraphikLight = require('./assets/fonts/Graphik-Light.woff');

var _GraphikLight2 = _interopRequireDefault(_GraphikLight);

var _GraphikLight3 = require('./assets/fonts/Graphik-Light.woff2');

var _GraphikLight4 = _interopRequireDefault(_GraphikLight3);

var _GraphikMedium = require('./assets/fonts/Graphik-Medium.woff');

var _GraphikMedium2 = _interopRequireDefault(_GraphikMedium);

var _GraphikMedium3 = require('./assets/fonts/Graphik-Medium.woff2');

var _GraphikMedium4 = _interopRequireDefault(_GraphikMedium3);

var _GraphikSemibold = require('./assets/fonts/Graphik-Semibold.woff');

var _GraphikSemibold2 = _interopRequireDefault(_GraphikSemibold);

var _GraphikSemibold3 = require('./assets/fonts/Graphik-Semibold.woff2');

var _GraphikSemibold4 = _interopRequireDefault(_GraphikSemibold3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } /* eslint no-unused-expressions: 0 */


var store = (0, _store2.default)();
var target = document.getElementById('root');

if (!target) {
  throw Error('no element with id "root" exists');
}

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(_demo2.default, null)
  )
), target);

(0, _registerServiceWorker2.default)();

(0, _styledComponents.injectGlobal)(_templateObject, _GraphikLight2.default, _GraphikLight4.default, _GraphikMedium2.default, _GraphikMedium4.default, _GraphikSemibold2.default, _GraphikSemibold4.default);