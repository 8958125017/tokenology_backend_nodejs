var Maintenance = require('../models/maintenance.js');
var mongoose = require('mongoose');



var checkWebsiteStatus = function(req, res){
	let condition = { website : req.body.website };

	Maintenance.findOne(condition, {},function(err,data){
		if(err) return res.send({data : 400, status : false, message : "Something went wrong!."});
		// if(!data)	res.send(data : 400, status : false, message : "Something went wrong!.");
		if(data) return res.send({data : 200, status : data.status, message : "Your website status."});
	});
}

var createWebsiteStatus = function(req, res){
	let obj = { website : req.body.website, status : req.body.status };

	  Maintenance.create(obj,function(err,sucess){
        if(err) return res.send({message : "there are error to subscribe it",status : 400});
              
        if(sucess) return res.send({message : "Your web status has been recorded",status : 200})
     });
}

exports.createWebsiteStatus = createWebsiteStatus;
exports.checkWebsiteStatus = checkWebsiteStatus;