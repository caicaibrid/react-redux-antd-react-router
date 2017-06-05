/**
 * Created by Administrator on 2017/6/3 0003.
 */
import {COLLAPSED_STATUS,LEFT_SLIDE_CHECKED} from "./actionTypes"
import {getStore,setStore} from "../utils/storage"

/*获取侧边栏的状态*/
export function collapsed_status(collapsed) {
    return {
        type:COLLAPSED_STATUS
    }
}

/*侧边栏默认显示哪个*/
export function left_slide_checked(value) {
    let {current,openKeys} = value;
    let store_left_slide = getStore("left_slide_checked");
    let left_slide_checked = Object.assign(
        {},
        (store_left_slide&&JSON.parse(store_left_slide)) || {},
        value
    );
    setStore("left_slide_checked",JSON.stringify(left_slide_checked));
    return {
        type:LEFT_SLIDE_CHECKED,
        current,
        openKeys
    }
}