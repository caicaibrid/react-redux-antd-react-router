/**
 * Created by Administrator on 2017/6/3 0003.
 */
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducer/index'

/*

const middlewares = [thunk]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export default function configureStore(initialState){
    return createStoreWithMiddleware(rootReducer,initialState)
}*/
export default createStore(
    rootReducer,
    applyMiddleware(thunk)
);