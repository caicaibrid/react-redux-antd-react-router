'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = require('../reducer/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [_reduxThunk2.default]; /**
                                           * Created by Administrator on 2017/6/3 0003.
                                           */

var createStoreWithMiddleware = _redux.applyMiddleware.apply(undefined, middlewares)(_redux.createStore);

function configureStore(initialState) {
  return createStoreWithMiddleware(_index2.default, initialState);
}

//# sourceMappingURL=store-compiled.js.map