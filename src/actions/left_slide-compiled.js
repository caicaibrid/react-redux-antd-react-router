"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.collapsed_status = collapsed_status;
exports.left_slide_checked = left_slide_checked;

var _actionTypes = require("./actionTypes");

var _storage = require("../utils/storage");

/*获取侧边栏的状态*/
/**
 * Created by Administrator on 2017/6/3 0003.
 */
function collapsed_status(collapsed) {
    return {
        type: _actionTypes.COLLAPSED_STATUS
    };
}

/*侧边栏默认显示哪个*/
function left_slide_checked(value) {
    var current = value.current,
        openKeys = value.openKeys;

    var store_left_slide = (0, _storage.getStore)("left_slide_checked");
    var left_slide_checked = Object.assign({}, store_left_slide && JSON.parse(store_left_slide) || {}, value);
    (0, _storage.setStore)("left_slide_checked", JSON.stringify(left_slide_checked));
    return {
        type: _actionTypes.LEFT_SLIDE_CHECKED,
        current: current,
        openKeys: openKeys
    };
}

//# sourceMappingURL=left_slide-compiled.js.map