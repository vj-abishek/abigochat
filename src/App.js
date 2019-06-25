import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home/Home';
import Signup from './auth/signup'
import Profile from './profile/Profile'
import Store from './More/Store';
import Message from './message/Message'
import Explore from './explore/Explore'
import Login from './auth/login'
import extraComponent from './auth/extraComponent';
import Presentation from "./SeeStatus/Presentation"
import Add from './AddPost/addPost'
class main extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>     
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/explore" component={Explore} />                   
          <Route path="/profile" component={Profile} />
          <Route path="/store" component={Store} />
          <Route path="/message" component={Message} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/extra" component = {extraComponent} />
          <Route path="/create" component={Add}/>
          <Route path="/presentation" component={Presentation} />
          </Switch>
          
          </div>
      </BrowserRouter>
    );
  }
}

export default main;