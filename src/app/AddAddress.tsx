import React, { useState } from 'react';

const AddAddress = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const address = input;

    console.log(address);
  };

  return (
    <div className="add-address-wrapper">
      <h1>Add A New Address</h1>
      <form onSubmit={handleSubmit} className="input-wrapper">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search/add an address"
        />
        {/* Conditionally rendered the submit button once something is typed into the input field */}
        {input && <button type="submit">SAVE?</button>}
      </form>
    </div>
  );
};

export default AddAddress;
