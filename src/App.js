import * as React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {MainPage} from './pages/MainPage/MainPage';
import Cities from './pages/Cities/Cities';
import Sights from './pages/Sights/Sights';
import CityInfo from './pages/CityInfo/CityInfo';
import SightInfo from './pages/SightInfo/SightInfo';
import {About} from './pages/About/About';

import NavbarComponent from './components/Navbar/Navbar';
import './App.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/cities' component={Cities} />
        <Route exact path='/sights' component={Sights} />
        <Route path='/cities/:id' component={CityInfo} />
        <Route path='/sights/:id' component={SightInfo} />
        <Route path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  );
}
