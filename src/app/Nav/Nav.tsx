import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navigation">
      <img src="./logo.png" alt="logo" />
      <nav>
        <ul>
          <Link to="/address-map">View Address Map</Link>
        </ul>
        <ul>
          <button>
            <Link to="/">Add Address</Link>
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
