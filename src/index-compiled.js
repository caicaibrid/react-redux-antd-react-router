'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _router = require('./router/router');

var _router2 = _interopRequireDefault(_router);

require('./css/antd.css');

require('./css/base.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*修改antd的默认样式*/
_reactDom2.default.render(_router2.default, document.getElementById('root'));
/*全局样式*/

//# sourceMappingURL=index-compiled.js.map