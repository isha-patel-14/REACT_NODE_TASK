import React, { useState } from 'react';
import './theme.css';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={darkMode ? 'container dark' : 'container light'}>
      <h2>{darkMode ? 'Dark Mode' : 'Light Mode'}</h2>
      <button onClick={toggleTheme} className="theme-btn">
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle;
