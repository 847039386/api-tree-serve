const mongoose = require("mongoose");

const VariedSchema = new mongoose.Schema({
    vapi : { type :mongoose.Schema.Types.ObjectId ,ref: 'vapi' ,required :true },     // 连接项目表
    type :{ type :String , enum :['GET' ,'POST'] , default :'GET' },    // 请求方式
    req : { type :String },  // 参数JSON
    res : { type :String },  // 返回值JSON
    create_at : { type :Date ,default :Date.now }   // 创建时间
});

module.exports = VariedSchema;