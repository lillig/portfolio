import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router} from 'react-router-dom'

const supportsHistory = 'pushState' in window.history

ReactDOM.render(
  <Router forceRefresh={!supportsHistory}>
      <App />
  </Router>
  , document.getElementById('root')
);
registerServiceWorker();
