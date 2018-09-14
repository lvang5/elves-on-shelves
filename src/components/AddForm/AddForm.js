import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const mapStateToProps = state => ({
  add: state.add,
});

// client-side route: "/addForm"
class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newElf: {
        description: '',
        url: '',
      }

    }
  }

  handleChange = (event) => {
    this.setState({
      newElf: {
        ...this.state.newElf,
        [event.target.name]: event.target.value,
      }
    });
  }

  addNewElf = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_ELF', payload: this.state.newElf })    
    axios({
      method: 'POST',
      url: '/api/shelf',
      data: { newElf: this.state.newElf }
    }).then((response) => {
      console.log('success with POST');
    }).catch((error) => {
      console.log(error);
      alert('unable to add elf');
    })
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.addNewElf}>
            <label>Description</label>
            <input type="text" name="description" onChange={this.handleChange} />
            <br />
            <label>Image Url</label>
            <input type="text" name="url" onChange={this.handleChange} />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AddForm);