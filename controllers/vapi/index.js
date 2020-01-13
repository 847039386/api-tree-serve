const Vapi = require('../../proxy').Vapi;
const Varied =require('../../proxy').Varied

const getVapis = async (ctx, next) => { 
    var { project_id ,pageIndex ,pageSize } = ctx.query;
    pageIndex = parseInt(pageIndex) || 1;
    pageSize = parseInt(pageSize) || 10;
    var query = { }
    try {
        if(project_id){
            query.project = project_id;
        }
        ctx.body = await Vapi.find({pageIndex ,pageSize ,options :{ query }})
    } catch (error) {
        ctx.body = { success :false };
    }
} 

const searchVapis = async (ctx, next) => { 
    var { keyword ,project_id ,pageIndex ,pageSize } = ctx.query;
    pageIndex = parseInt(pageIndex) || 1;
    pageSize = parseInt(pageSize) || 10;
    var query = { }
    try {
        if(project_id){
            query.project = project_id;
        }
        if(keyword){
            const reg = new RegExp(keyword, 'i')
            query["$or"] = [
                { name : {$regex : reg}},
                { describe : {$regex : reg}},
            ]
        }
        ctx.body = await Vapi.find({pageIndex ,pageSize ,options :{ query }})
    } catch (error) {
        ctx.body = { success :false };
    }
} 


const createVapi = async (ctx, next) => { 
    var { project_id ,describe ,api ,req ,res ,type } = ctx.request.body;
    var variedData = null;
    try {
        var vapi = await Vapi.findOne({ 
            query : { name : api }
        })
        if(vapi.data){
            variedData = await Varied.create({ vapi :vapi.data._id ,type ,res ,req });
        }else{
            var vapic = await Vapi.create({ project :project_id ,name :api ,describe });
            if(vapic.data){
                variedData = await Varied.create({ vapi :vapic.data._id ,type ,res ,req })
            }
        }
        ctx.body= variedData;
    } catch (error) {
        ctx.body = { success :false };
    }
}  

const removeVapi = async (ctx, next) => { 
    var { id } = ctx.request.body
    try {
        ctx.body = await Vapi.findByIdAndRemove(id);
    } catch (error) {
        ctx.body = { success :false };
    }
}  

const detail = async (ctx, next) => { 
    let id = ctx.query.id;
    try {
        ctx.body = await Vapi.findById(id ,{ populate :'project' })
    } catch (error) {
        ctx.body = { success :false };
    }
} 

module.exports = {
    getVapis,
    searchVapis,
    createVapi,
    removeVapi,
    detail
}