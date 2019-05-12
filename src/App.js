import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
  CarouselComponent,
  NavbarComponent,
} from './components';

import './App.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <CarouselComponent />
      <NavbarComponent />
    </BrowserRouter>
  );
}
