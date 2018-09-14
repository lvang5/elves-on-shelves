import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';


// client-side route: "/shelf"
class Shelf extends Component {
  state = {
    shelf: []
  };

  getShelf = () => {
    axios.get('/api/shelf')
    .then(response => {
      const action = {
        type: 'SET_SHELF',
        payload: response.data
      };
      this.props.dispatch(action);
    }).catch(error => {
      console.log(error);
      this.props.history.push('home');
    });
  };

  componentDidMount() {
    this.getShelf();
  }

  handleDelete = id => () => {
    console.log('DELETE ME');
    axios.delete('/api/shelf/'+ id)
    .then(response => {
      this.getShelf();
      console.log('Oh no this item has been deleted', response);
    }).catch(error => {
      console.log('You got an error');
      alert('There is an error somewhere, check here:', error);
    })
  };

  render() {
    return (
      <Grid container justify="space-around" alignItems="center" style={{marginTop: '20px'}}>
        {this.props.shelf.map((item)=> {
          return (
            <Grid item key={item.id}>
              <Card>
                <CardMedia image={item.image_url} style={{height: '150px'}}/>
                <CardContent>
                  <Typography variant="body1">
                  {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={this.handleDelete(item.id)}>Delete Me</Button>
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