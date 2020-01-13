    
const mongoose = require("mongoose");
const ProjectSchema = require('./model')

module.exports = mongoose.model("project", ProjectSchema);