import React, { Component } from 'react';
import './../App.css';


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    };
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.notSignedIn = this.notSignedIn.bind(this);
  }

  handleSignIn() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup(provider).then((result) => {
        const user = result.user;
        this.props.setUser(user);
    });
    this.setState({ signedIn: true });
  }

  handleSignOut() {
    this.props.firebase.auth().signOut().then(() => {
      this.props.setUser(null);
      console.log("Signed Out")
    });
    this.setState({ signedIn: false });
  }

  notSignedIn(isSignedIn) {
    if (!this.props.user)
    return <h1> Please sign in </h1>
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {
      this.props.setUser(user);
    });
  }

  updateUsername = () => {
   this.auth.currentUser.updateProfile({
     displayName: this.state.newUsername,
   }).then(() => {
     //I called this again after the database had been updated.
     this.auth.onAuthStateChanged(user => {
       this.props.setUser(user.displayName);
     });
     this.setState({ newUsername: '' });
     alert("Update Username Successful");
   }).catch((error) => {
     alert(error)
   });
   this.toggleModal();
 }

  render() {
    return(
      <section className="signIn">
        <button onClick={this.signIn}>Sign In</button>
        <button onClick={this.signOut}>Sign Out</button>
        {this.notSignedIn(this.signedIn)}
      </section>
    )
  }
}

export default User;
