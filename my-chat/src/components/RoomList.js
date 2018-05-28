import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
//create firebase ref for rooms
    this.roomsRef = this.props.firebase.database().ref('rooms')
  }

  // Mount RoomList from firebase
  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) });
    });

  }

  // Create Room List
  render() {
      return (
        <div className="room-list">
              <h1>howdy!</h1>
                <div id="rooms">
                 {this.state.rooms.map((room, index) => (
                     <li key={room.key}>{room.key}</li>
//                        <h2 key={index}>{room.name}</h2>
                  ))}
                </div>
        </div>
        );
  }
}

export default RoomList;
