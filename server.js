const express = require('express');

const app = express();


//if don't use app.method then it will give an error in body as it serves the end point...
// app.get('/',(req,res)=> res.send("hello world"));
app.get('/',(req,res)=> res.json({msg : "welcome to the contact keeper api"}));


//register access through users.js
app.use('/api/users',require('./routes/users'));

//login access throughauth.js
app.use('/api/auth',require('./routes/auth'));

//contact acess through contact.js
app.use('/api/contact',require('./routes/contact'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));