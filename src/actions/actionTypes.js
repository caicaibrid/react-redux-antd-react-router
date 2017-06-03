/**
 * Created by Administrator on 2017/6/3 0003.
 */

/*
* action类型
* */

// 侧边栏是否隐藏
export const COLLAPSED = "COLLAPSED"


/*
 * action创建函数
 * */

export let changeCollapsed = function (collapsed) {
    return {
        type:COLLAPSED,
        collapsed
    }
}