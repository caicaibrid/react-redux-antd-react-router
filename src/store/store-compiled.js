'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = require('../reducer/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*

const middlewares = [thunk]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export default function configureStore(initialState){
    return createStoreWithMiddleware(rootReducer,initialState)
}*/
exports.default = (0, _redux.createStore)(_index2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default)); /**
                                                                                                                * Created by Administrator on 2017/6/3 0003.
                                                                                                                */

//# sourceMappingURL=store-compiled.js.map