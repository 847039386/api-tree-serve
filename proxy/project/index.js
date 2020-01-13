const ProjectModel = require('../../models').Project;
const Aut = require('../../common/aut');
const Project = new Aut(ProjectModel)

const find = function({ pageIndex ,pageSize ,options }){
    return Project.find({ pageIndex ,pageSize ,options })
}

const findOne = function(options={}){
    return Project.findOne(options);
}

const findById = function(id ,options={}){
    return Project.findById(id ,options)
}

const findByIdAndRemove = function(id){
    return Project.findByIdAndRemove(id)
}

const findByIdAndUpdate = function(id ,newData={} ,options={}){
    return Project.findByIdAndUpdate(id ,newData ,options)
}

const create = function(data){
    return Project.create(data);
}

module.exports = {
    find,
    findById,
    findByIdAndRemove,
    findByIdAndUpdate,
    create,
    findOne
}