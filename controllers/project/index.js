const Project = require('../../proxy').Project;

const getProjects = async (ctx, next) => { 
    let pageIndex = parseInt(ctx.query.pageIndex) || 1;
    let pageSize = parseInt(ctx.query.pageSize) || 10;
    try {
        ctx.body = await Project.find({pageIndex ,pageSize })
    } catch (error) {
        ctx.body = { success :false };
    }
} 

const createProject = async (ctx, next) => { 
    var { name ,cname ,furl ,domain } = ctx.request.body
    try {
        ctx.body = await Project.create({ name ,cname ,furl ,domain });
    } catch (error) {
        ctx.body = { success :false };
    }
}  

const removeProject = async (ctx, next) => { 
    var { id } = ctx.request.body
    try {
        ctx.body = await Project.findByIdAndRemove(id);
    } catch (error) {
        ctx.body = { success :false };
    }
}  

const detail = async (ctx, next) => { 
    var { id } = ctx.query
    try {
        ctx.body = await Project.findById(id)
    } catch (error) {
        ctx.body = { success :false };
    }
} 

const saveTree = async (ctx, next) => { 
    var { id ,tree } = ctx.request.body
    try {
        ctx.body = await Project.findByIdAndUpdate(id ,{tree})
    } catch (error) {
        ctx.body = { success :false };
    }
}  

const updateProject = async (ctx, next) => { 
    var { id ,name ,cname ,furl ,domain } = ctx.request.body
    try {
        ctx.body = await Project.findByIdAndUpdate(id,{ name ,cname ,furl ,domain })
    } catch (error) {
        ctx.body = { success :false };
    }
} 


module.exports = {
    getProjects,
    createProject,
    removeProject,
    detail,
    saveTree,
    updateProject
}