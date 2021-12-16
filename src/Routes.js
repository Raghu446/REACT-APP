/* eslint-disable linebreak-style */
import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithLayout from './Components/RouteWithLayout';
import Sidebar from './Components/Sidebar';
import { UniversityTable } from './Components/UniversityTable';
import AdmissionTable  from './Components/AdmissionTable';
import Main from './Layout/Main';
import Home from './Components/Home';


const Routes = () => (
  <Switch>
    <RouteWithLayout component={Home} exact layout={Main} path="/home" />
    <RouteWithLayout component={UniversityTable} exact layout={Main} path="/universities" />
    <RouteWithLayout component={AdmissionTable} exact layout={Main} path="/admissions" />
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
