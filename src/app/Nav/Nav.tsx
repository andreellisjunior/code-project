import React from 'react';

const Nav = () => {
  return (
    <div className="navigation">
      <img src="./logo.png" alt="logo" />
      <nav>
        <ul>
          <a href="/address-map">View Address Map</a>
        </ul>
        <ul>
          <button>
            <a href="/">Add Address</a>
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
