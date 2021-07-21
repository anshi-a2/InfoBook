const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

//Init middleware
app.use(express.json({extended: false}));


//if don't use app.method then it will give an error in body as it serves the end point...
// app.get('/',(req,res)=> res.send("hello world"));
app.get('/',(req,res)=> res.json({msg : "welcome to the contact keeper api"}));


//register access through users.js
app.use('/api/users',require('./routes/users'));

//login access through auth.js
app.use('/api/auth',require('./routes/auth'));

//contact acess through contact.js
app.use('/api/contact',require('./routes/contact'));

const PORT = process.env.PORT || 3000;
//  const PORT =3000;

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));