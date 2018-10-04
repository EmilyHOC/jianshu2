import React, { Component } from 'react';
import {Provider } from 'react-redux'
import store from './store/index'
import Header from './common/header';
import Home from './pages/home';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
         <Header></Header>
          <Home></Home>
        </div>
      </Provider>
    );
  }
}
export default App;
