const mongoose = require("mongoose");

const VapiSchema = new mongoose.Schema({
    project : { type :mongoose.Schema.Types.ObjectId ,ref: 'project' ,required :true },     // 连接项目表
    name :{ type :String },         // api名称
    describe :{ type :String }, // 描述
    create_at : { type :Date ,default :Date.now }   // 创建时间
});

module.exports = VapiSchema;