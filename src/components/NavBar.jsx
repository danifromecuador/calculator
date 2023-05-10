import React from 'react';
import '../stylesheets/NavBar.css';

function NavBar() {
  return (
    <nav className="NavBarContainer">
      <h1>Math Magicians</h1>
      <ul className="NavBar">
        <li>Home</li>
        <hr />
        <li>Calculator</li>
        <hr />
        <li>Quote</li>
      </ul>
    </nav>
  );
}

export default NavBar;
