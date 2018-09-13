import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';

// client-side route: "/addForm"
class AddForm extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div>
          <form>
            <label>Name</label>
            <input type="text" />
            <br/>
            <label>Description</label>
            <input type="text" />
            <br/>
            <lable>Image Url</lable>
            <input type="text" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddForm;