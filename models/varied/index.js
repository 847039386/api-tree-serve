    
const mongoose = require("mongoose");
const VariedSchema = require('./model')

module.exports = mongoose.model("varied", VariedSchema);