import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Index from './src/Index'
import { allReducers } from './src/reducers/allReducers'
 
const middleware = applyMiddleware(thunk);
const store =  createStore(allReducers, applyMiddleware(thunk));

export default class App extends Component{
  render() {
    return (
      <Provider store = { store } >
        <Index />
      </Provider>
    );
  }
}