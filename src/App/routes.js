import React, { Component, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "container/Login";
import DashBoard from "container/Dashboard";
import PageLoader from "components/PageLoader";
import { getAuthUserID } from "modules/helper";
import LayOut from "./appLayOut";
const routes = [
  {
    path: "/",
    exact: true,
    AuthRoute: true,
    component: DashBoard,
  },
  {
    path: "/login",
    exact: true,
    AuthRoute: false,
    component: Login,
  },
  {
    path: "/dashBoard",
    exact: true,
    AuthRoute: true,
    component: DashBoard,
  },
];
const PrivateRoute = ({ component: Component, ...rest }) => {
  if (getAuthUserID()) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else return <Redirect to="/login" />;
};
const RestrictedRoute = ({ component: Component, publicAccess, ...rest }) => {
  if (getAuthUserID()) {
    return (
      <LayOut>
        <Route
          {...rest}
          render={(props) =>
            publicAccess ? <Component {...props} /> : <Redirect to="/" />
          }
        />
      </LayOut>
    );
  } else
    return <Route {...rest} render={(props) => <Component {...props} />} />;
};
class Routes extends Component {
  render() {
    return (
      <Suspense fallback={<PageLoader />}>
        <Switch>
          {routes.map((route, index) => {
            return !route.AuthRoute ? (
              <RestrictedRoute {...route} key={index} />
            ) : (
              <PrivateRoute {...route} key={index} />
            );
          })}
          <Route render={(props) => <h1>404 Page</h1>} />
        </Switch>
      </Suspense>
    );
  }
}
export default Routes;
