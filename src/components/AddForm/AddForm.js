import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';

// client-side route: "/addForm"
class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newElf: {
        name: '',
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
    this.props.dispatch({type: 'ADD_ELF', payload: this.state.newElf})
  }

  render() {
    return (
      <div>
        <Nav />
        <div>
          {JSON.stringify(this.state)}
          <form onSubmit={this.addNewElf}>
            <label>Name</label>
            <input type="text" name="name" onChange={this.handleChange} />
            <br />
            <label>Description</label>
            <input type="text" name="description" onChange={this.handleChange} />
            <br />
            <lable>Image Url</lable>
            <input type="text" name="url" onChange={this.handleChange} />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddForm;