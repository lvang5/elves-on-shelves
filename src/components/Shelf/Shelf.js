import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';


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

  handleDelete = () => {
    console.log('DELETE ME');
    
  };

  render() {
    return (
      <Grid container justify="space-around" alignItems="center" style={{marginTop: '20px'}}>
        {this.props.shelf.map((item)=> {
          return (
            <Grid item key={item.id}>
              <Card >
                <CardMedia image={item.image_url}/>
                <CardContent>
                  <Typography variant="body1">
                  {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={this.handleDelete}>Delete Me</Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    );
  }
}

export default connect(reduxState => ({shelf: reduxState.shelf}))(Shelf);