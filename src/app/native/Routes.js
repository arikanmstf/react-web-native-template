import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-native';
import { HOME, DUMMY_TWO } from 'constants/routes/routeNames';

// Screens
import DummyScreen from 'screens/dummy/DummyNativeContainer';
import DummyScreenTwo from 'screens/dummyTwo/DummyNativeContainer';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={HOME} component={DummyScreen} />
      <Route exact path={DUMMY_TWO} component={DummyScreenTwo} />
    </Switch>
  </Router>
);

export default Routes;
