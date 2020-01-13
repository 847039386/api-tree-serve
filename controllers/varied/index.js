const Varied = require('../../proxy').Varied

const getVarieds = async (ctx, next) => { 
    let pageIndex = parseInt(ctx.query.pageIndex) || 1;
    let pageSize = parseInt(ctx.query.pageSize) || 10;
    try {
        ctx.body = await Varied.find({pageIndex ,pageSize })
    } catch (error) {
        ctx.body = { success :false };
    }
} 

const updateVariedSQ = async (ctx, next) => { 
    var { type ,json ,id } = ctx.request.body;
    var newData = { };
    if(type == "REQ"){
        newData.req = json;
    }else{
        newData.res = json;
    }
    try {
        ctx.body = await Varied.findByIdAndUpdate(id,newData);
    } catch (error) {
        ctx.body = { success :false };
    }
} 

const removeByid = async (ctx, next) => { 
    var { id } = ctx.request.body;
    try {
        ctx.body = await Varied.findByIdAndRemove(id);
    } catch (error) {
        ctx.body = { success :false };
    }
} 




module.exports = {
    getVarieds,
    updateVariedSQ,
    removeByid
}