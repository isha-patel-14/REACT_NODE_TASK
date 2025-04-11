const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const users = [
  { id: 1, name: 'Isha', email: 'isha@example.com' },
  { id: 2, name: 'Falak', email: 'falak@example.com' },
  { id: 3, name: 'Hetav', email: 'hetav@example.com' }
];

//Q1_SimpleServer_GET
app.get('/', (req, res) => {
  res.send('Server is running');
});

//Q2_GET_User
app.get('/users', (req, res) => {
  res.json(users); 
});

//Q3_POST_User
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required!' });
    }
    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

//Q4_GET_User_by_ID
app.get('/users/:id', (req, res) => {
  const userId=parseInt(req.params.id);
  const user=users.find(u=>u.id===userId);

  if(!user){
    return res.status(404).json({ error: 'User not found!' });
  }
  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
