const express = require('express');

const router= express.Router();

//@acess : public
//@desc: registeration 
//@route : post /api/users
router.post('/',(req,res)=>{res.send("Register a user")});

module.exports = router;