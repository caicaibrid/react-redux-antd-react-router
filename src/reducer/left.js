/**
 * Created by Administrator on 2017/6/3 0003.
 */
import {COLLAPSED_STATUS,LEFT_SLIDE_CHECKED} from "../actions/actionTypes"
import {getStore} from "../utils/storage"
let left_slide_checked = getStore("left_slide_checked");
let initCollapsed = {
    collapsed:null,
    current:(left_slide_checked && JSON.parse(left_slide_checked).current) || "1",
    openKeys:(left_slide_checked && JSON.parse(left_slide_checked).openKeys) || ["sub1"]
}
export default function (state=initCollapsed,action) {
    switch (action.type){
        case COLLAPSED_STATUS:
            if(state.collapsed===null || action.collapsed===null){
                return Object.assign({},state,{
                    collapsed:(document.documentElement.clientWidth>768?false:true) //判断首次进来是显示还是隐藏
                })
            }
            return Object.assign({},state,{
                collapsed:!state.collapsed
            })
        case LEFT_SLIDE_CHECKED:
            return Object.assign({},state,{
                current:action.current || state.current,
                openKeys:action.openKeys || state.openKeys
            })
        default:
            return state
    }
}