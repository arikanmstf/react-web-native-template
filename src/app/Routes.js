// @flow
import React from 'react';
import { HOME, DUMMY_TWO } from 'constants/routes/routeNames';
import type { RoutesProps } from './RoutesTypes';

const Routes = (props: RoutesProps) => {
  const {
    DummyScreen, DummyScreenTwo, Router, Switch, Route,
  } = props;

  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={DummyScreen} />
        <Route exact path={DUMMY_TWO} component={DummyScreenTwo} />
      </Switch>
    </Router>
  );
};

export default Routes;
