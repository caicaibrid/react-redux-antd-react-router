/**
 * Created by Administrator on 2017/6/3 0003.
 */
import {COLLAPSED} from "../actions/actionTypes"

let initCollapsed = (document.documentElement.clientWidth<640?true:false)

export default function (state=initCollapsed,action) {
    console.log(action,"reducer")
    switch (action.type){
        case COLLAPSED:
            return action.collapsed
        default:
            return initCollapsed
    }
}