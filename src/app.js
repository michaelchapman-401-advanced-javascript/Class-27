import React from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Counter from './components/counter/counter';

/**
 * The App component which handles rendering all of the created components
 */
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
