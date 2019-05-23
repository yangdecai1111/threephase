const studentCtrl=require('../controller/studentCtrl');
const express=require("express");
const  router=express.Router();

router.route('/student').post(studentCtrl.add).get(studentCtrl.find)

module.exports=router;