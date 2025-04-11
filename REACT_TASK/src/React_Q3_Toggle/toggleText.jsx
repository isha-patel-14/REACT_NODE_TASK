import React, { useState } from 'react';
import './ToggleText.css';

function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="toggle-container">
      <button onClick={handleToggle} className="toggle-btn">
        {isVisible ? 'Hide' : 'Show'} Text
      </button>

      {isVisible && <p className="toggle-text">Hello World</p>}
    </div>
  );
}

export default ToggleText;
