/**
 * Created by Administrator on 2017/6/3 0003.
 */
import {COLLAPSED_STATE_HIDE,COLLAPSED_STATE_SHOW} from "./actionTypes"

/*获取侧边栏的状态*/
export function collapsed_status(collapsed) {
    let status=false;
    if(collapsed!==undefined){
        status = typeof collapsed==="boolean"&&!collapsed;
    }else {
        status = (document.documentElement.clientWidth<640?true:false);
    }
    if (status){
        return {
            type:COLLAPSED_STATE_HIDE,
            collapsed:true
        }
    }else {
        return {
            type:COLLAPSED_STATE_SHOW,
            collapsed:false
        }
    }
}
