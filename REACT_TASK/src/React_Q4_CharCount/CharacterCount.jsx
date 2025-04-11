import React, { useState } from 'react';
import './CharacterCount.css';

function CharacterCount() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="char-container">
      <h2>Character Count</h2>
      <textarea
        className="char-textarea"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      ></textarea>
      <p className="char-count">Characters: {text.length}</p>
    </div>
  );
}

export default CharacterCount;
