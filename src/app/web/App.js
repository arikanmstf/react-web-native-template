// @flow
import React from 'react';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'store/reducers';

// Theme
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import * as COLOR from 'constants/theme/color';

// Routes
import Routes from './Routes';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const theme = createMuiTheme({
  palette: {
    primary: {
      main: COLOR.green500,
    },
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: COLOR.white,
      },
    },
  },
});

const App = () => {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
