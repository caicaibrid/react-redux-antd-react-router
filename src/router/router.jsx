import React from "react";
import {Route,IndexRoute} from "react-router";


import Base from "../components/base/Base";

const Welcome = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/Welcome').default)
    },'Welcome')
}
const App = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../App').default)
    },'App')
}
const Login = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/login/Login').default)
    },'Login')
}
const Button = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('../components/Button').default)
    },'Button')
}
export default (
    <div>
        <Route path="/login"  getComponent={Login} />
        <Route path="/"  component={Base}>
            <IndexRoute getComponent={Welcome} />
            <Route path="Welcome" getComponent={Welcome}/>
            <Route path="App" getComponent={App}/>
            <Route path="login" getComponent={Login}/>
            <Route path="Button" getComponent={Button}/>
        </Route>
    </div>
);
