import React from "react";
import {Router,Route,hashHistory,IndexRedirect} from "react-router";

import '../index.css';
import Button from  '../components/Button';
import Login from "../components/Login";
import App from '../App';



var Routers = <Router history={hashHistory}>
                <Route path="/"  component={App}>
                    <IndexRedirect to="/app" />
                    <Route path="/app" component={App}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/Button" component={Button}/>

                </Route>
             </Router>

export default Routers;
