import React from 'react';
import { Route, Switch } from "react-router-dom";
import Login from '../components/auth/Login';
import DashBoard from '../components/Main/DashBoard';
import Redirect from "react-router-dom/es/Redirect";
import Cookies from 'js-cookie'

const PrivateRoute = ({ component: Component, ...props }) => {
    return (
        <Route
            {...props}
            render={innerProps =>
                Cookies.get("token")?
                    <Component {...innerProps} />
                    :
                    <Redirect to="/" />
            }
        />
    );
};

export default props =>(
    <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/dashboard" exact component={DashBoard} />
    </Switch>
)