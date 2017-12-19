var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      phone:{
          type:String,
          unique: true,
          required: true,
          trim:true,
      },
      registeredDate :{
        type: Date,
        required:true,
        default:Date.now(),
      },
      registeredBy:{
        type: String,
        required:true,
        default:'Website'
      },
      status: {
        type: String,
        required: true,
        default: 'Pending'
      },
});

module.exports = mongoose.model('Contact', ContactSchema);
