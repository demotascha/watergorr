import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';
import GoogleMap from './components/map';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div style={{width: '100%', height: '400px'}}>
      <GoogleMap />
    </div>
  </Provider>
  , document.querySelector('.container')
);
