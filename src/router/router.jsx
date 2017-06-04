import React from "react";
import {Route,IndexRoute} from "react-router";

import Button from  '../components/Button';
import Login from "../components/Login";
import App from '../App';
import Welcome from  "../components/Welcome"

import Base from "../components/Base";



export default (
    <Route path="/"  component={Base}>
        <IndexRoute component={Welcome} />
        <Route path="/welcome" component={Welcome}/>
        <Route path="/app" component={App}/>
        <Route path="/login" component={Login}/>
        <Route path="/Button" component={Button}/>

    </Route>
);
