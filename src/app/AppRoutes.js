import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));


const ChartJs = lazy(() => import('./charts/ChartJs'));
const UserList = lazy(() => import('./user-list/userList'));
const UploadFile = lazy(() => import('./UploadFile'));
const Home = lazy(() => import('./Home/home'));



class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />

          <Route path="/charts/chart-js" component={ ChartJs } />

          <Route path="/user-list/UserList" component={ UserList } />
          <Route path="/upload-file" component={ UploadFile } />
          <Route path="/auth/home" component={ Home } />


          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;