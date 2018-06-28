// @flow
import * as React from 'react';

const connect = (mapUiToProps: Function) => (
  (WrappedComponent: React.ComponentType<*>) => {
    const uiComponents = mapUiToProps();
    return (props: Object) => (
      <WrappedComponent
        {...uiComponents}
        {...props}
      />
    );
  }
);

export default connect;
