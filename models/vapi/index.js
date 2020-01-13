    
const mongoose = require("mongoose");
const VapiSchema = require('./model')

module.exports = mongoose.model("vapi", VapiSchema);