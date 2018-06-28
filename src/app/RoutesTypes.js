// @flow
import * as React from 'react';
import type { DummyProps } from 'screens/dummy/DummyTypes';
import type { DummyProps as DummyPropsTwo } from 'screens/dummyTwo/DummyTypes';

export type RoutesProps = {
  DummyScreen: React.ComponentType<DummyProps>,
  DummyScreenTwo: React.ComponentType<DummyPropsTwo>,
  Router: Function,
  Switch: Function,
  Route: Function,
};
