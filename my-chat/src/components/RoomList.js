import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {rooms: [],newRoomName: ''};
    // create a firebase reference for rooms
    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.handleChange = this.handleChange.bind(this);
    this.createRoom = this.createRoom.bind(this);
  }

  // Mount RoomList from firebase
  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) });
    });

  }

    handleChange(e){
      e.preventDefault();
      this.setState({ newRoomName: e.target.value });
    }

    createRoom(e){
      e.preventDefault();
      this.roomsRef.push({ name: this.state.newRoomName});
      this.setState({ newRoomName:''});
    }

  // Create Room List
  render() {
      return (
        <section className="room-list">
          <form className="addChatRoom">
            <input type="text" value={this.state.newRoomName} placeholder="New Room" onChange={this.handleChange}/>
            <input type="submit" onClick={this.createRoom}/>
          </form>

              <h1>howdy!</h1>
                <div id="rooms">
                 {this.state.rooms.map((room, index) => (
                     <li key={room.key}>{room.key}</li>
//                        <h2 key={index}>{room.name}</h2>
                  ))}
                </div>
        </section>
        );
  }
}

export default RoomList;
