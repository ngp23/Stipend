import logo from './logo.svg';
import React, { useState, Component } from 'react';
import './App.css';
import Login from'./Login.js';
import Logout from'./Logout.js';
import HomePage from './components/HomePage';
import Nav from './Nav';
<<<<<<< HEAD
import Test from './Test';
=======
import Activity from './Activity';
>>>>>>> 8d21e42092da63ca5c17676c76f0e7de1b397740

import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";

class App extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        isAuthenticated: false,
        tokenId: ''
      }
    }
  
      // When components gets added to the DOM tree, state is loaded from localStorage (if available)
    componentDidMount() {
      let storedAuth = localStorage.getItem('isAuth') === 'true';
      let storedTokenId = localStorage.getItem('tokenId');
      let newAuth = this.state.isAuthenticated;
      let newToken = this.state.tokenId;
      if(storedAuth != undefined)
        newAuth = storedAuth;
      if(storedTokenId != undefined)
        newToken = storedTokenId;
      this.setState({ isAuthenticated: newAuth, tokenId: newToken });
    }
  
    // Allows children of components to update the global 'logged in' state.
    authHandler = (auth) => {
      let data = this.state;
      data['isAuthenticated'] = auth;
      this.setState(data);
      localStorage.setItem("isAuth", auth);
    }
    
    // Allows children of components to update the global 'token ID' state.
    tokenHandler = (tokenId) => {
        const data = this.state;
        data['tokenId'] = tokenId;
        this.setState(data);
        localStorage.setItem('tokenId', tokenId );
    }

  render() {
    return (
    <Router>
    <div className="App">
        <Nav auth={this.authHandler} token={this.tokenHandler} isAuth={this.state.isAuthenticated} currentToken={this.state.tokenId}/>
        <Switch>
          <Route exact path="/" render={(props) => ( <HomePage auth={this.authHandler} token={this.tokenHandler} isAuth={this.state.isAuthenticated} currentToken={this.state.tokenId} /> )}/>
          <Route exact path="/Activity" render={(props) => ( <Activity auth={this.authHandler} token={this.tokenHandler} isAuth={this.state.isAuthenticated} currentToken={this.state.tokenId} /> )}/>

        </Switch>
      </div>
    </Router>);
  }
};

export default App;