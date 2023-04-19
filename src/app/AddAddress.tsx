import React from 'react';

const AddAddress = () => {
  return (
    <div className="add-address-wrapper">
      <h1>Add A New Address</h1>
      <div className="input-wrapper">
        <input type="text" value="" placeholder="Search/add an address" />
        <button type="submit">ADD</button>
      </div>
    </div>
  );
};

export default AddAddress;
