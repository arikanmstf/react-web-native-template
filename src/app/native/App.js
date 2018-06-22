// @flow
import React from 'react';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'store/reducers';

// Theme
import { ThemeProvider } from 'react-native-material-ui';
import * as COLOR from 'constants/theme/color';

// Routes
import Routes from './Routes';

if (typeof global.self === 'undefined') {
  global.self = global;
}

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
};

const App = () => {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <ThemeProvider uiTheme={uiTheme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
