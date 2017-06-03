"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initCollapsed;
    var action = arguments[1];

    switch (action.type) {
        case _actionTypes.COLLAPSED:
            return !action.collapsed;
        default:
            return initCollapsed;
    }
};

var _actionTypes = require("../actions/actionTypes");

var initCollapsed = {
    collapsed: null
}; /**
    * Created by Administrator on 2017/6/3 0003.
    */

//# sourceMappingURL=left-compiled.js.map