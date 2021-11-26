/* eslint-disable linebreak-style */
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Admissions from './Components/pages/Admissions';
import RouteWithLayout from './Components/RouteWithLayout';


import Sidebar from './Components/Sidebar';
import { UniversityTable } from './Components/UniversityTable';
import Main from './Layout/Main';


const Routes = () => (
  <Switch>
    <RouteWithLayout component={UniversityTable} exact layout={Main} path="/universities" />
    
    <RouteWithLayout
      component={Sidebar}
      exact
      layout={Main}
      path="/"
    />
    

    <Redirect to="/not-found" />
  </Switch>
);

export default Routes;
