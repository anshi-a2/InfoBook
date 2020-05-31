const express= require('express');

const router= express.Router();

//@acess : private
//@desc: get logged in userg 
//@route : get /api/auth
router.get('/',(req,res)=>{res.send(" get logged in user")});

//@acess : public
//@desc: auth user and get token 
//@route : post /api/auth
router.post('/',(req,res)=>{res.send(" log in user")});

module.exports = router;