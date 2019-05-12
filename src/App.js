import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { NavbarComponent, SightseeingInfoComponent, SightseeingListComponent } from './components';
import { Landing } from './pages';

import './App.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Switch>
        <Route exact path='/' component={ Landing } />
        <Route exact path='/sightseeings' component={ SightseeingListComponent } />
        <Route path='/sightseeings/:id' component={ SightseeingInfoComponent } />
      </Switch>
    </BrowserRouter>
  );
}
