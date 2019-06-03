import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Landing } from './pages/Landing/Landing';
import  Dashboard  from './pages/Dashboard/Dashboard';

import NavbarComponent from './components/Navbar/Navbar';
import SightInfo from './components/SightInfo/SightInfo';

import './App.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Switch>
        <Route exact path='/' component={ Landing } />
        <Route exact path='/sights' component={ Dashboard } />
        <Route path='/sights/:id' component={ SightInfo } />
      </Switch>
    </BrowserRouter>
  );
}
