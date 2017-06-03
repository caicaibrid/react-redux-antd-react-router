import React from "react";
import {Router,Route,hashHistory,IndexRedirect} from "react-router";

import Button from  '../components/Button';
import Login from "../components/Login";
import App from '../App';
import Welcome from  "../components/Welcome"

import Base from "../components/Base";



let Routers = <Router history={hashHistory}>
                <Route path="/"  component={Base}>
                    <IndexRedirect to="/welcome" />
                    <Route path="/welcome" component={Welcome}/>
                    <Route path="/app" component={App}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/Button" component={Button}/>

                </Route>
             </Router>

export default Routers;
