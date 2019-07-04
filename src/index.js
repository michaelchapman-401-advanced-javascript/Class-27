import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

/**
 * The Main component which handles rendering the entire website
 */
class Main extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
