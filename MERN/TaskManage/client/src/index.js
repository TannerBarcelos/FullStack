import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import './App.css';

// Needed for bootstrap/reactstrap to work
import 'bootstrap/dist/css/bootstrap.min.css';
// DraftJS
import 'draft-js/dist/Draft.css';

// Component imports
import App from './App';

// Redux stuff
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  document.getElementById('root'),
);
