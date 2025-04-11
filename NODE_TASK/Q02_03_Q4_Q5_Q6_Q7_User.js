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
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found!' });
  }
  res.json(user);
});

//Q5_PUT_User_by_ID
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  const userIndex = users.findIndex(u => u.id === userId)
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found!' });
  }
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required!' });
  }
  const updatedUser = { id: userId, name, email };
  users[userIndex] = updatedUser;

  res.status(200).json(updatedUser);
});


//Q6_PATCH_User_by_ID
app.patch('/users/:id',(req,res)=>{
  const userId=parseInt(req.params.id);
  const {name,email}=req.body;
  const user=users.find(u=>u.id===userId);
  if(!user){
    return res.status(404).json({error:'User not found!'});
  }
  if(name!== undefined)user.name=name;
  if(email!== undefined)user.email=email;
  res.status(200).json(user);
});


//Q7_DELETE_User_by_ID
app.delete('/users/:id',(req,res)=>{
  const userId=parseInt(req.params.id);
  const userIndex=users.findIndex(u=>u.id===userId);
  if(userIndex===-1){
    return res.status(404).json({error:'User not found!'});
  }
  users.splice(userIndex,1);
  res.status(200).json({ message: 'User deleted successfully' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
