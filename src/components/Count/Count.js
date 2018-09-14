import React, { Component } from 'react';
import {connect}from 'react-redux';
import axios from 'axios';


// client-side route: "/count"
class Count extends Component {
constructor(props){
  super(props);
  this.state ={
    counts:[]
  }
}
componentDidMount(){
  this.getCount();
}

getCount(){
  console.log('Getting Count');
  axios({
    method:'GET',
    url:'api/shelf/count'
  }).then((response)=>{
    console.log(response.data);
    const action = {type:'GET_COUNT', payload: response.data};
    this.props.dispatch(action);
    }).catch((error)=>{
      alert('Unable to get counts:', error);
    })
  }

  render() {
    return (
      'Count Page'
    );
  }
}


export default connect(mapStateToProps)(Count);
