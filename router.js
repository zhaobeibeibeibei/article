const user=require('./controllers/c_user');
const express=require('express');
const router=express.Router();
router
      .get('/signin',user.login)
      .post('/signin',user.msg);
module.exports=router;