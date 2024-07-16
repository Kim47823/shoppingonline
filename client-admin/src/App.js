import './App.css';
import React, { Component } from 'react';
import MyProvider from './contexts/MyProvider';
import Login from '../../client-admin/src/components/LoginComponent';
import Main from '../../client-admin/src/components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <Login />
        <BrowserRouter>
        <Main />
        </BrowserRouter>
      </MyProvider>
    );
  }
}
export default App;