import React, { Component } from 'react';
import './App.css';
import MessageList from './components/messages';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';
import User from './components/username';


// Initialize Firebase
 var config = {
   apiKey: "AIzaSyAX4T_4Fwtp9ewCl3HDYdfaWcO1XHfF8cQ",
   authDomain: "chitchat-adb63.firebaseapp.com",
   databaseURL: "https://chitchat-adb63.firebaseio.com",
   projectId: "chitchat-adb63",
   storageBucket: "chitchat-adb63.appspot.com",
   messagingSenderId: "490733154510"
 };
 firebase.initializeApp(config)




 class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    activeRoom:'',
    user: null
  };
    this.activeRoom = this.activeRoom.bind(this);
    this.setUser = this.setUser.bind(this);
}

activeRoom(room) {
  this.setState({ activeRoom: room });
}

setUser(user){
  this.setState({ user: user })
//  console.log(user);
}

  render() {
    let showMessages = this.state.activeRoom;
    let currentUser = this.state.user === null ? "Guest" : this.state.user.displayName;

    return (
  <div className="container">
        <div className="sideBar">
       <h1> chit chat </h1>
        <user firebase={firebase} setUser={this.setUser} currentUser={currentUser}/>
       <RoomList firebase={firebase} activeRoom={this.activeRoom} />
    </div>
    <div className="messageWindow">
       <h1>{this.state.activeRoom.name ||'Select room'}</h1>
        <h2>Current User: {this.state.user ? this.state.user.displayName : 'Guest'}</h2>
       <User firebase={firebase} setUser={this.setUser} user={this.state.user}/>
       <MessageList firebase={firebase} activeRoom={this.state.activeRoom.key} user={this.state.user}/>
    </div>
  </div>
    );
  }
}

export default App;
