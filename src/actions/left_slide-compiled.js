"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.collapsed_status = collapsed_status;

var _actionTypes = require("./actionTypes");

/*获取侧边栏的状态*/
function collapsed_status(collapsed) {
    var status = false;
    if (collapsed !== undefined) {
        status = typeof collapsed === "boolean" && !collapsed;
    } else {
        status = document.documentElement.clientWidth < 640 ? true : false;
    }
    if (status) {
        return {
            type: _actionTypes.COLLAPSED_STATE_HIDE,
            collapsed: true
        };
    } else {
        return {
            type: _actionTypes.COLLAPSED_STATE_SHOW,
            collapsed: false
        };
    }
} /**
   * Created by Administrator on 2017/6/3 0003.
   */

//# sourceMappingURL=left_slide-compiled.js.map