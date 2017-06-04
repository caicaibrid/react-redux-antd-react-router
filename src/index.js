import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routes  from './router/router';
import configureStore from './store/store.js';

/*修改antd的默认样式*/
import "./css/antd.css";
/*全局样式*/
import "./css/base.css";

const store = configureStore();


const route = (
    <Provider store={store} key="provider">
        <Router history={hashHistory} routes={routes} />
    </Provider>
)

render(route, document.getElementById('root'))
