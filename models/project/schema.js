const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    name : { type :String },                            // 中文名
    cname : { type :String },                           // 英文名
    domain : { type :String },                          // 域名
    furl : { type :String },                            // 项目路径
    tree : { type :String ,default:'' },                            // 项目关系,JSON为数组
    create_at : { type :Date ,default :Date.now }       // 创建时间
});

module.exports = ProjectSchema;