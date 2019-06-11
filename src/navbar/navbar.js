import React from 'react';
import './navbar.css';

const Navbar = props => (
  <div className="navbar ">
    <div>Clicky Game</div>
    <div className={props.navMsgColor}>{props.navMessage}</div>
    <div>
      <Nav.Link href="#Homepage">Homepage</Nav.Link>
      <Nav.Link href="#Stock Screen Page">Stock Screen Page</Nav.Link>
      <Nav.Link href="#About Us">About Us</Nav.Link>
    </div>
  </div>
);

export default Navbar;