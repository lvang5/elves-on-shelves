import React, { Component } from 'react';
import {connect}from 'react-redux';
import axios from 'axios';
import { stringify } from 'querystring';
import Header from "../Header/Header"
const mapStateToProps = state =>({
  counter: state.counter
});

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
    console.log('data:', response.data);
    const action = {type:'GET_COUNT', payload: response.data};
    this.props.dispatch(action);
    }).catch((error)=>{
      alert('Unable to get counts:', error);
    })
  }

  render() {
    return (
             <div>
               <Header />
                <table>
                  <thead>
                    <tr>
                      <th>User Name</th>
                      <th># of Items Added</th>
                    </tr>
                  </thead>
                  <tbody>
                    
        
                      {this.props.counter.map((thing)=>{
                         
                        return(
                          <tr>
                            <td>{thing.username}</td>
                            <td>{thing.count}</td>
                          </tr>
                          
                          
                        );
                      })}
                      
                    
                  </tbody>
                </table>

             </div>
      );
  }
}


export default connect(mapStateToProps)(Count);
