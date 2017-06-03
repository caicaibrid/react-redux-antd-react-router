"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by Administrator on 2017/6/3 0003.
 */

/*
* action类型
* */

// 侧边栏是否隐藏
var COLLAPSED = exports.COLLAPSED = "COLLAPSED";

/*
 * action创建函数
 * */

var changeCollapsed = exports.changeCollapsed = function changeCollapsed(collapsed) {
  return {
    type: COLLAPSED,
    collapsed: collapsed
  };
};

//# sourceMappingURL=actionTypes-compiled.js.map