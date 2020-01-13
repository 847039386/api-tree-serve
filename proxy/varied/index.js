const VariedModel = require('../../models').Varied;
const Aut = require('../../common/aut');
const Varied = new Aut(VariedModel)

const find = function({ pageIndex ,pageSize ,options }){
    return Varied.find({ pageIndex ,pageSize ,options })
}

const findOne = function(options={}){
    return Varied.findOne(options);
}

const findById = function(id ,options={}){
    return Varied.findById(id ,options)
}

const findByIdAndRemove = function(id){
    return Varied.findByIdAndRemove(id)
}

const findByIdAndUpdate = function(id ,newData={} ,options={}){
    return Varied.findByIdAndUpdate(id ,newData ,options)
}

const create = function(data){
    return Varied.create(data);
}


module.exports = {
    find,
    findById,
    findByIdAndRemove,
    findByIdAndUpdate,
    create,
    findOne
}