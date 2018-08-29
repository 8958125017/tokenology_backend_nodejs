var User = require('../models/users.js');
var mongoose = require('mongoose');


var getAllUser = function(req,res){
  User.find({},function(err,data){
    if(err){
      res.json({message : "unable to get the all user",data : 400})
    }else if(data) {
      res.json({message : "There are all user details here",data : data,status : 200 })
    } else {
      res.json ({message : "There is error to get the data",status : 400})
    }
  })
}

var deleteUserByAdmin  = function(req,res) {
  var reqObj = {
      _id: req.body.userId
  };
  // var UpdateObj = {
  //     isDeleted: true
  // };
let condition = { _id: req.body.userId };

      User.findOne(condition,{},function(err,data){
        if(err) {
        res.json({message : "Something went wrong!",status : 400,err : err})
      }else if(data){
        console.log('user status :',!data.isDeleted);
        User.updateOne(reqObj,{ $set : { isDeleted : !data.isDeleted}},function(err1,success){
          if(err) return res.json({messsage : "please enter the correct userId",status :400,err:err1})
          else if(success){
            res.json({message : "User permission has been chnaged!.",status : 200})
          }else {
            res.json({message : "Please enter the correct userId",status :400})
          }
        })
      }else {
        res.json({message: "error occured while permission changed!.",status :400, err:err})
      }

      })

}

exports.getAllUser = getAllUser;
exports.deleteUserByAdmin  = deleteUserByAdmin;
