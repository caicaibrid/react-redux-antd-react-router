"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("redux");

var _left = require("./left");

var _left2 = _interopRequireDefault(_left);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Administrator on 2017/6/3 0003.
 */
exports.default = (0, _redux.combineReducers)({
  leftReducer: _left2.default
});

//# sourceMappingURL=index-compiled.js.map