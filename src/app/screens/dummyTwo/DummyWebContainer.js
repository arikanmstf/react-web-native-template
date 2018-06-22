import { connect } from 'react-redux';
import { connect as connectUi } from 'helpers/connect';
import { Text, Button, View } from 'ui';
import DummyScreen from './Dummy';
import { mapStateToProps, mapDispatchToProps } from './dummyActions';

const mapUiToProps = () => ({ Text, Button, View });

export default connect(mapStateToProps, mapDispatchToProps)(connectUi(mapUiToProps)(DummyScreen));
