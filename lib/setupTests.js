'use strict';

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

// Make Enzyme functions available in all test files without importing
global.shallow = _enzyme.shallow;
global.render = _enzyme.render;
global.mount = _enzyme.mount;
// Make Sinon spy function available in all test files without importing
global.spy = _sinon.spy;