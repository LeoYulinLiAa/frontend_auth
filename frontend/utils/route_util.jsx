import { useSelector } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";
import React from "react";

function loggedInSelector(state) {
  return !!state.session.currentUser;
}

const Auth = ({ path, component: Component }) => {
  const loggedIn = useSelector(loggedInSelector);
  return <Route path={ path } render={ props =>
    loggedIn ? <Redirect to="/"/> : <Component { ...props } />
  }/>
};

const Protected = ({ path, component: Component }) => {
  const loggedIn = useSelector(loggedInSelector);
  return <Route path={ path } render={ props =>
    loggedIn ? <Component { ...props } /> : <Redirect to="/signup" />
  }/>;
};

export const AuthRoute = withRouter(Auth);
export const ProtectedRoute = withRouter(Protected);
