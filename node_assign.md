### Q-1. Write a Node.js script to print "Hello, World!" to the console.
``` 
console.log("Hello, World!"); 
```

### Q-2. Create a Node.js script to add two numbers and print the result. 
```
const a = 10; 
const b = 20; 
const sum = a + b; 
console.log("Sum:", sum); 
```

### Q-3. Write a script to read a file and print its content. 
```
const fs = require("fs"); 
fs.readFile("sample.txt", "utf8", (err, data) => { 
if (err) { 
console.error("Error reading file:", err); 
return; 
} 
console.log("File Content:", data); 
}); 
```

### Q-4. Write a Node.js script to create a simple GET API using Express. 
```
const express = require("express"); 
const app = express(); 
const port = 3000; 
app.get("/", (req, res) => { 
res.send("Hello from GET API!"); 
}); 
app.listen(port, () => { 
console.log(`Server running at http://localhost:${port}`); 
}); 
```

```
npm install express
```

### Q-5. Create a POST API that takes two numbers and returns their sum. 
```
const express = require("express"); 
const app = express(); 
const port = 3000; 
app.use(express.json()); 
app.post("/sum", (req, res) => { 
const { a, b } = req.body; 
const sum = a + b; 
res.json({ sum }); 
}); 
app.listen(port, () => { 
console.log(`Server running at http://localhost:${port}`); 
}); 
```

### Q-6. Write an API endpoint that returns a “404 Not Found” error for invalid routes. 
```
const express = require("express"); 
const app = express(); 
const port = 3000; 
app.get("/", (req, res) => { 
res.send("Welcome!"); 
}); 
app.use((req, res) => { 
res.status(404).send("404 Not Found"); 
}); 
app.listen(port, () => { 
console.log(`Server running at http://localhost:${port}`); 
}); 
```

### Q-7. Create a Node.js script to serve an HTML file using Express. 
```
const express = require("express"); 
const path = require("path"); 
const app = express(); 
const port = 3000; 
app.get("/", (req, res) => { 
res.sendFile(path.join(__dirname, "index.html")); 
}); 
app.listen(port, () => { 
console.log(`Server running at http://localhost:${port}`); 
}); 
```

### Q-8. Implement a login simulation using a hardcoded username and password. 
```
const express = require("express"); 
const app = express(); 
const port = 3000; 
app.use(express.json()); 
app.post("/login", (req, res) => { 
const { username, password } = req.body; 
if (username === "isha" && password === "isha14") { 
res.send("Login successful"); 
} else { 
res.status(401).send("Invalid credentials"); 
} 
}); 
app.listen(port, () => { 
console.log(`Server running at http://localhost:${port}`); 
}); 
```

### Q-9. Write a Node.js script to log all incoming API requests to the console. 
```
const express = require("express"); 
const app = express(); 
const port = 3000; 
app.use((req, res, next) => { 
console.log(`${req.method} ${req.url}`); 
next(); 
}); 
app.get("/", (req, res) => { 
res.send("Request logged!"); 
}); 
app.listen(port, () => { 
console.log(`Server running at http://localhost:${port}`); 
}); 
```

### Q-10. Create a simple microservice that returns current server time. 
```
const express = require("express"); 
const app = express(); 
const port = 3000; 
app.get("/time", (req, res) => { 
res.json({ time: new Date().toISOString() }); 
}); 
app.listen(port, () => { 
console.log(`Server running at http://localhost:${port}`); 
}); 
```

### Q-11. Write a script to fetch data from a public API and display it in JSON format. 
```
const https = require("https"); 
https.get("https://jsonplaceholder.typicode.com/posts/1", (res) => { 
let data = ""; 
res.on("data", (chunk) => { 
data += chunk; 
}); 
res.on("end", () => { 
console.log(JSON.parse(data)); 
}); 
}).on("error", (err) => { 
console.log("Error: " + err.message); 
}); 
```

### Q-12. Create a script to connect to MongoDB using Mongoose. 
```
const mongoose = require("mongoose"); 
mongoose.connect("mongodb://127.0.0.1:27017/testdb", { 
useNewUrlParser: true, 
useUnifiedTopology: true, 
}); 
const db = mongoose.connection; 
db.on("error", console.error.bind(console, "connection error:")); 
db.once("open", () => { 
console.log("Connected to MongoDB"); 
}); 
```

```
npm install mongoose
```

### Q-13. Write a function to hash a password using bcrypt. 
```
const bcrypt = require("bcrypt"); 
const password = "ishaPatel14"; 
const saltRounds = 10; 
bcrypt.hash(password, saltRounds, (err, hash) => { 
if (err) throw err; 
console.log("Hashed password:", hash); 
}); 
```

```
npm install bcrypt
```

### Q-14. Implement a basic JWT authentication system for an API. 
```
const express = require("express"); 
const jwt = require("jsonwebtoken"); 
const app = express(); 
app.use(express.json()); 
const secret = "isha14"; 
app.post("/login", (req, res) => { 
const { username } = req.body; 
const token = jwt.sign({ username }, secret, { expiresIn: "1h" }); 
res.json({ token }); 
}); 
app.get("/protected", (req, res) => { 
const token = req.headers.authorization?.split(" ")[1]; 
if (!token) return res.status(403).send("Token required"); 
jwt.verify(token, secret, (err, decoded) => { 
if (err) return res.status(401).send("Invalid token"); 
res.send(`Hello ${decoded.username}, access granted.`); 
}); 
}); 
app.listen(port, () => { 
console.log(‘Server running at http://localhost:3000’); 
});
``` 

```
npm install jsonwebtoken
```