
import React, { Component } from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, } from 'redux-persist';
import rootReducer from './reducer/rootReducer';

export default class App extends Component {
 
  
  render() {
    const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk))
    const persisStore = persistStore(store)
    return (
      <Provider store={store}>
          <Router/>
      </Provider>
    );
  }
}