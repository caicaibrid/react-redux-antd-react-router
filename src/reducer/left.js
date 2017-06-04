/**
 * Created by Administrator on 2017/6/3 0003.
 */
import {COLLAPSED_STATE_SHOW,COLLAPSED_STATE_HIDE} from "../actions/actionTypes"

let initCollapsed = {
    collapsed:null
}

export default function (state=initCollapsed,action) {
    switch (action.type){
        case COLLAPSED_STATE_SHOW:
            return Object.assign({},action)
        case COLLAPSED_STATE_HIDE:
            return Object.assign({},action)
        default:
            return initCollapsed
    }



}