import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HOME, DUMMY_TWO } from 'constants/routes/routeNames';

// Screens
import DummyScreen from 'screens/dummy/DummyWebContainer';
import DummyScreenTwo from 'screens/dummyTwo/DummyWebContainer';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={HOME} component={DummyScreen} />
      <Route exact path={DUMMY_TWO} component={DummyScreenTwo} />
    </Switch>
  </Router>
);

export default Routes;
