import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import * as Components from './components';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Components.Home} />
      </Switch>
    </Router>
  );
}
