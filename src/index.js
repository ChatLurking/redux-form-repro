import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { reducer as form } from 'redux-form';
import { createStore } from 'redux';

import Form from './Form';
import './styles.css';

const store = createStore(form);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Form min={4} />
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
