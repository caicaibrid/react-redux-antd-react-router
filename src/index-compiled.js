'use strict';

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _router = require('./router/router');

var _router2 = _interopRequireDefault(_router);

require('./css/antd.css');

require('./components/base/base.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*修改antd的默认样式*/
var store = configureStore();
/*全局样式*/

var route = (0, _reactDom.render)(route, document.getElementById('root'));

//# sourceMappingURL=index-compiled.js.map