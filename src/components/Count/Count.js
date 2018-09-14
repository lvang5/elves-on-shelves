import React, { Component } from 'react';
import {connect}from 'react-redux';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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
             <Paper>
             
                <Table>
                  <TableHead>
                    <TableRow>
                      <th>User Name</th>
                      <th># of Items Added</th>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    
        
                      {this.props.counter.map((thing)=>{
                         
                        return(
                          <TableRow>
                            <TableCell>{thing.username}</TableCell>
                            <TableCell>{thing.count}</TableCell>
                          </TableRow>
                          
                          
                        );
                      })}
                      
                    
                  </TableBody>
                </Table>

             </Paper>
      );
  }
}


export default connect(mapStateToProps)(Count);
