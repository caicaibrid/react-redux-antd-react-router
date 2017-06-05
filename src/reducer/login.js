/**
 * Created by Administrator on 2017/6/4 0004.
 */
import {LOGIN_ING,LOGIN_OUT,LOGIN_SUCCESS} from "../actions/actionTypes"

let loginData = {
    username:null,
    loginState:0 // 0未登录  1登录成功  -1 正在登录
}

export default function (state=loginData,action) {
    switch (action.type){
        case LOGIN_ING:
            return Object.assign({},state,{
                loginState:-1,
                username:"正在登录"
            })
        case LOGIN_SUCCESS:
            return Object.assign({},state,{
                loginState:1,
                username:action.username
            })
        case LOGIN_OUT:
            return state
        default:
            return state
    }
}