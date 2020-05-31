const express= require('express');

const router = express.Router();

//@acess : private
//@desc: get all users contact 
//@route : get /api/contact
router.get('/',(req,res)=>{res.send(" get all contacts")});

//@acess : private
//@desc: add new contact 
//@route : post /api/contact
router.post('/',(req,res)=>{res.send(" add new contacts")});

//@acess : private
//@desc: update contact 
//@route : put /api/contact/:id
router.put('/:id',(req,res)=>{res.send(" update contacts")});

//@acess : private
//@desc: delete contact 
//@route : delete /api/contact/:id
router.delete('/:id',(req,res)=>{res.send(" delete contacts")});

module.exports = router;