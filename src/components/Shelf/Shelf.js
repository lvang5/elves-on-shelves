import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


// client-side route: "/shelf"
class Shelf extends Component {
  state = {
    shelf: []
  };

  componentDidMount() {
    axios.get('/api/shelf')
    .then(response => {
      const action = {
        type: 'SET_SHELF',
        payload: response.data
      };
      this.props.dispatch(action);
      // this.setState({
      //   shelf: response.data
      // });
    }).catch(error => {
      console.log(error);
      this.props.history.push('home');
    });
  }

  render() {
    return (
      <div>
      
      
      
      
      {JSON.stringify(this.props.shelf)}</div>
    );
  }
}

export default connect(reduxState => ({shelf: reduxState.shelf}))(Shelf);