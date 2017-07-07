import * as React from 'react';
import { Route, IndexRedirect } from 'react-router';
import {
  BASE_ROUTE,
  SIGNUP_ROUTE,
} from './../constants/Routes';
import Signup from '../modules/signup/container';
import App from './../containers/App';

const NoRouteComponent = () => (
  <div>
    No Route Match
  </div>
);

export default (
  <Route path={BASE_ROUTE} component={App}>
    <IndexRedirect to={SIGNUP_ROUTE} />
    <Route path={SIGNUP_ROUTE} component={Signup} />
    <Route path="*" component={NoRouteComponent} />
  </Route>
);
