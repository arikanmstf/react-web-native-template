require('react-native');
/* eslint-disable */
function interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

interopRequireDefault(require('react'));

const expo = interopRequireDefault(require('expo'));

const App = interopRequireDefault(require('./App.js'));

if (process.env.NODE_ENV === 'development') {
  expo.default.KeepAwake.activate();
}

expo.default.registerRootComponent(App.default);
/* eslint-enable */
