import React, { useState } from 'react';

const SearchForm = () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const address = input;

    console.log(address);
  };

  return (
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
  );
};

export default SearchForm;
