import React, { Component } from 'react';
import axios from 'axios';

// client-side route: "/shelf"
class Shelf extends Component {
  state = {
    shelf: []
  };

  componentDidMount() {
    axios.get('/api/shelf')
    .then(response => {
      this.setState({
        shelf: response.data
      });
    }).catch(error => {
      console.log(error);
      this.props.history.push('home');
    });
  }

  render() {
    return (
      <div>{JSON.stringify(this.state.shelf)}</div>
    );
  }
}

export default Shelf;