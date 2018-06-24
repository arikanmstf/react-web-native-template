import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { connect as connectUi } from 'helpers/connect';
import {
  Text, Button, View, Image,
} from 'ui/native';
import DummyScreen from './Dummy';
import { mapStateToProps } from './dummyActions';

const mapUiToProps = () => ({
  Text, Button, View, Image,
});

export default connect(mapStateToProps)(connectUi(mapUiToProps)(withRouter(DummyScreen)));
