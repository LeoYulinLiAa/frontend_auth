import React from 'react';
import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import ChirpIndexContainer from './chirps/chirp_index_container';
import Home from './home/home';
import { Route } from 'react-router-dom';
import SignUp from "./session/signup";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import Login from "./session/login";

export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={Home} />
    <ProtectedRoute path="/chirps" component={ChirpIndexContainer} />
    <AuthRoute path="/signup" component={SignUp} />
    <AuthRoute path="/login" component={Login} />
  </div>
);
