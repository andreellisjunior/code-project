import React, { useState } from 'react';
import SearchForm from 'src/components/SearchForm';

const AddAddress = () => {
  return (
    <div className="add-address-wrapper">
      <h1>Add A New Address</h1>
      <SearchForm />
    </div>
  );
};

export default AddAddress;
