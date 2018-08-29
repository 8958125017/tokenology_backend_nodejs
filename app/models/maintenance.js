var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var maintenace = new Schema ({
  website : { type : String },
  status  : { type: Boolean, default : false}
});

module.exports = mongoose.model('maintenace',maintenace);