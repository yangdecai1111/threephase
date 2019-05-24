const studentCtrl=require('../controller/studentCtrl');
const express=require("express");
const jwt=require("../jwt/jwt");
const  router=express.Router();


router.route('/student').post(jwt,studentCtrl.add).get(jwt,studentCtrl.find)

module.exports=router;