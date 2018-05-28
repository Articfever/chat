import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
    }

    render() {
      return (
        <div className="sideBar">
              <h1> Chit Chat </h1>
              <RoomList firebase={firebase}/>
        </div>
      );
    }
}

export default App;
