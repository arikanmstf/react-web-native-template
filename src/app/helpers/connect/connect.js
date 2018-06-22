import React from 'react';

const connect = (mapUiToProps) => (
  (WrappedComponent) => {
    const uiComponents = mapUiToProps();
    return (props) => (
      <WrappedComponent
        {...uiComponents}
        {...props}
      />
    );
  }
);

export default connect;
