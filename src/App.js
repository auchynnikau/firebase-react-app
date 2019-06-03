import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Landing } from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard';
import Cities from './pages/Cities/Cities';

import NavbarComponent from './components/Navbar/Navbar';
import SightInfo from './components/SightInfo/SightInfo';
import CityInfo from './components/CityInfo/CityInfo';

import './App.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Switch>
        <Route exact path='/' component={ Landing } />
        <Route exact path='/sights' component={ Dashboard } />
        <Route path='/sights/:id' component={ SightInfo } />
        <Route exact path='/cities' component={ Cities } />
        <Route path='/cities/:id' component={ CityInfo } />
      </Switch>
    </BrowserRouter>
  );
}
