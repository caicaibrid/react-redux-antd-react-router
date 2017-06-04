import React from "react";
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import routes  from './router/router';
import store from './store/store.js';

/*全局样式*/
import "./css/base.css";
import "./css/animate.css";

const route = (
    <Provider store={store} key="provider">
        <Router history={hashHistory} routes={routes} />
    </Provider>
)
render(route, document.getElementById('root'))
