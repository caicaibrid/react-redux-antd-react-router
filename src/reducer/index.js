/**
 * Created by Administrator on 2017/6/3 0003.
 */
import { combineReducers } from 'redux';

import leftReducer from "./left"
import loginReducer from "./login"
//统一管理所有的reducers，方便后期扩展维护
const rootReducer = combineReducers({
    collapsed:leftReducer,
    userInfo:loginReducer
})

export default rootReducer