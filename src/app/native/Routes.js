import { connect } from 'helpers/connect';
import { MemoryRouter as Router, Switch, Route } from 'react-router-native';
// Screens
import DummyScreen from 'screens/dummy/DummyNativeContainer';
import DummyScreenTwo from 'screens/dummyTwo/DummyNativeContainer';
import Routes from '../Routes';

const mapRouteToProps = () => ({
  DummyScreen, DummyScreenTwo, Router, Switch, Route,
});

export default connect(mapRouteToProps)(Routes);
