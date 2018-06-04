import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './components/messages';
import RoomList from './components/RoomList';
//import * as firebase from 'firebase';

import firebase from 'firebase/app';
import 'firebase/database'

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
     this.state = {activeRoom:''};
     this.activeRoom = this.activeRoom.bind(this);
    }

    activeRoom(room) {
      this.setState({activeRoom: room});

    }

    render() {
      return (
        <div className="container">
        <div className="sideBar">
          <h1> chit chat </h1>
          <RoomList firebase={firebase} activeRoom={this.activeRoom} />
        </div>

        <div className="messageWindow">
          <h1>{this.state.activeRoom.name ||'Select room'}</h1>
          <MessageList firebase={firebase} activeRoom={this.state.activeRoom.key}/>
        </div>
        </div>
      );
    }
}

export default App;
