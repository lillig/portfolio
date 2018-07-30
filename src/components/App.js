import React, { Component } from 'react';
import '../stylesheets/App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
