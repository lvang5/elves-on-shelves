import React from 'react';
import Nav from '../Nav/Nav';

const Header = ({ title }) => (
  <div className="instructions">
    <div>
      <h1 className="lead">{ title }</h1>
    </div>
    <Nav />
  </div>
);

export default Header;
