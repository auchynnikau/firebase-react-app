import * as React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.scss';
import {About}    from './pages/About/About';
import Cities     from './pages/Cities/Cities';
import Sights     from './pages/Sights/Sights';
import {Regions}  from './pages/Regions/Regions';
import {MainPage} from './pages/MainPage/MainPage';
import CityInfo   from './pages/CityInfo/CityInfo';
import SightInfo  from './pages/SightInfo/SightInfo';
import NavbarComponent from './components/Navbar/Navbar';

export const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/regions' component={Regions} />
        <Route exact path='/cities' component={Cities} />
        <Route exact path='/sights/:region' component={Sights} />
        <Route path='/cities/:id' component={CityInfo} />
        <Route path='/sights/:region/:id' component={SightInfo} />
        <Route path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  );
}
