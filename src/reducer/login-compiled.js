"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : loginData;
    var action = arguments[1];

    console.log(action, "reducer");
    switch (action.type) {
        case _actionTypes.LOGIN_ING:
            return Object.assign({}, {
                loginState: -1,
                username: "正在登录"
            });
        case _actionTypes.LOGIN_SUCCESS:
            return Object.assign({}, {
                loginState: 1,
                username: action.username
            });
        case _actionTypes.LOGIN_OUT:
            return Object.assign({}, loginData);
        default:
            return loginData;
    }
};

var _actionTypes = require("./actionTypes");

var loginData = {
    username: null,
    loginState: 0 // 0未登录  1登录成功  -1 正在登录
}; /**
    * Created by Administrator on 2017/6/4 0004.
    */

//# sourceMappingURL=login-compiled.js.map