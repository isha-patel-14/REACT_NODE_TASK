### Q-1. Write a React component to display “Hello, World!” using JSX. 
```import React from 'react'; 
function HelloWorld() { 
  return <h1>Hello, World!</h1>; 
} 
export default HelloWorld;
```

### Q-2. Create a React component that displays your name and age using props.
```
import React from 'react'; 
function DisplayInfo(props) { 
  return ( 
    <div> 
      <p>Name: {props.name}</p> 
      <p>Age: {props.age}</p> 
    </div> 
  ); 
} 
export default DisplayInfo;
```

### Q-3. Write a React component to display a simple unordered list of three hobbies.
``` 
import React from 'react'; 
function Hobbies() { 
  return ( 
    <ul> 
      <li>Reading</li> 
      <li>Traveling</li> 
      <li>Cooking</li> 
    </ul> 
  ); 
} 
export default Hobbies;
```

### Q-4. Write a React component with a button that increments a counter on click. 
```
import React, { useState } from 'react'; 
function Counter() { 
  const [count, setCount] = useState(0); 
  return ( 
    <div> 
      <p>Count: {count}</p> 
      <button onClick={() => setCount(count + 1)}>Increment</button> 
    </div> 
  ); 
} 
export default Counter;
```

### Q-5. Implement a simple toggle button using React state. 
```
import React, { useState } from 'react'; 
function ToggleButton() { 
  const [isOn, setIsOn] = useState(false); 
  return ( 
    <button onClick={() => setIsOn(!isOn)}> 
      {isOn ? 'ON' : 'OFF'} 
    </button> 
  ); 
} 
export default ToggleButton;
```

### Q-6. Write a React component that takes user input and displays it below the input 
field.
``` 
import React, { useState } from 'react'; 
function UserInput() { 
  const [input, setInput] = useState(''); 
  return ( 
    <div> 
      <input  
        type="text"  
        placeholder="Type something"  
        value={input}  
        onChange={(e) => setInput(e.target.value)}  
      /> 
      <p>{input}</p> 
    </div> 
  ); 
} 
export default UserInput; 
```

### Q-7. Set up React Router and create routes for "Home" and "About" pages. 
```
import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
function Home() { 
  return <h1>Home Page</h1>; 
} 
function About() { 
  return <h1>About Page</h1>; 
} 
function App() { 
  return ( 
    <Router> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
      </Routes> 
    </Router> 
  ); 
} 
export default App; 
```

### Q-8. Create a navigation bar using Link from React Router. 
```
import React from 'react'; 
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'; 
function Home() { 
  return <h1>Home Page</h1>; 
} 
function About() { 
  return <h1>About Page</h1>; 
} 
function App() { 
  return ( 
    <Router> 
      <nav> 
        <Link to="/">Home</Link> | <Link to="/about">About</Link> 
      </nav> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
      </Routes> 
    </Router> 
  ); 
} 
export default App; 
```
 
### Q-9. Create a 404 page for undefined routes in React. 
```
function NotFound() { 
  return <h1>404 - Page Not Found</h1>; 
} 
 
Q-10. Demonstrate useEffect to fetch and display placeholder data. 
import React, { useEffect, useState } from 'react'; 
function FetchData() { 
  const [data, setData] = useState([]); 
  useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/posts') 
      .then((response) => response.json()) 
      .then((data) => setData(data)); 
  }, []); 
  return ( 
    <ul> 
      {data.map((item) => ( 
        <li key={item.id}>{item.title}</li> 
      ))} 
    </ul> 
  ); 
} 
export default FetchData; 
```
 
### Q-11. Use useRef to focus on an input field on button click. 
```
import React, { useRef } from 'react'; 
function FocusInput() { 
  const inputRef = useRef(); 
  return ( 
    <div> 
      <input ref={inputRef} type="text" /> 
      <button onClick={() => inputRef.current.focus()}>Focus</button> 
    </div> 
  ); 
} 
export default FocusInput;
``` 
 
### Q-12. Implement React Context to pass a theme value between components. 
```
import React, { createContext, useContext } from 'react'; 
const ThemeContext = createContext(); 
function ThemedComponent() { 
  const theme = useContext(ThemeContext); 
  return <div style={{ background: theme }}>Themed Content</div>; 
} 
function App() { 
  return ( 
    <ThemeContext.Provider value="lightblue"> 
      <ThemedComponent /> 
    </ThemeContext.Provider> 
  ); 
} 
export default App; 
```
 
### Q-13. Write an Angular component that displays "Welcome to Angular." 
File : welcome.component.ts 
```
import { Component } from '@angular/core'; 
@Component({ 
  selector: 'app-welcome', 
  templateUrl: './welcome.component.html', 
  styleUrls: ['./welcome.component.css'] 
}) 
export class WelcomeComponent {} 
```
File : welcome.component.html 
```
<h1>Welcome to Angular</h1> 
File : welcome.component.css 
h1 { 
color: #1976d2; 
font-family: Arial, sans-serif; 
} 
```

### Q-14. Write an Angular template to display the current date using interpolation. 
File : date.component.ts 
```
import { Component } from '@angular/core'; 
@Component({ 
selector: 'app-date', 
templateUrl: './date.component.html', 
styleUrls: ['./date.component.css'] 
}) 
export class DateComponent { 
currentDate: string = new Date().toLocaleDateString(); 
} 
```
File : date.component.html 
```
<p>Today's Date: {{ currentDate }}</p> 
File : date.component.css 
p { 
font-size: 18px; 
color: #4caf50; 
} 
```

### Q-15. Write an Angular template with a button that changes a text value. 
File : toggle-text.component.ts 
```
import { Component } from '@angular/core'; 
@Component({ 
  selector: 'app-toggle-text', 
  templateUrl: './toggle-text.component.html', 
  styleUrls: ['./toggle-text.component.css'] 
}) 
export class ToggleTextComponent { 
  message: string = 'Hello, Angular!'; 
  changeMessage() { 
    this.message = this.message === 'Hello, Angular!'  
      ? 'Text Changed!'  
      : 'Hello, Angular!'; 
  } 
} 
```
File : toggle-text.component.html 
```
<h2>{{ message }}</h2> 
<button (click)="changeMessage()">Change Text</button> 
```
File : toggle-text.component.css 
```
h2 { 
  color: #3f51b5; 
  font-weight: bold; 
} 
 
button { 
  padding: 8px 16px; 
  background-color: #6200ea; 
  color: white; 
  border: none; 
  cursor: pointer; 
  border-radius: 4px; 
}
```