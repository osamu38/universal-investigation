import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';

export default (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
  </Route>
);