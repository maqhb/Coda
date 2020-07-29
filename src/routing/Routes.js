import React from 'react';
import { Route, Switch } from "react-router-dom";
import Login from '../components/auth/Login';
import DashBoard from '../components/Main/DashBoard';

export default props =>(
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={DashBoard} />
    </Switch>
)