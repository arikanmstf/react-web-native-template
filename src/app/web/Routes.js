import { connect } from 'helpers/connect';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Screens
import DummyScreen from 'screens/dummy/DummyWebContainer';
import DummyScreenTwo from 'screens/dummyTwo/DummyWebContainer';
import Routes from '../Routes';

const mapRouteToProps = () => ({
  DummyScreen, DummyScreenTwo, Router, Switch, Route,
});

export default connect(mapRouteToProps)(Routes);
