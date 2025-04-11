import React, { useState } from 'react';
import './LiveSearch.css';

function LiveSearch() {
  const namesList = ['Isha','Falak','Hetav','Kalpan','Dax','Ishita','Mohit'];
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNames = namesList.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
      <h2>Live Search</h2>
      <input
        type="text"
        placeholder="Search names..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
      <ul className="search-results">
        {filteredNames.length > 0 ? (
          filteredNames.map((name, index) => (
            <li key={index} className="result-item">{name}</li>
          ))
        ) : (
          <li className="no-result">No match found</li>
        )}
      </ul>
    </div>
  );
}

export default LiveSearch;
