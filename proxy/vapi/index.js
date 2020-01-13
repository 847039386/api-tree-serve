const VapiModel = require('../../models').Vapi;
const Aut = require('../../common/aut');
const Vapi = new Aut(VapiModel)

const find = function({ pageIndex ,pageSize ,options }){
    return Vapi.find({ pageIndex ,pageSize ,options })
}

const findOne = function(options={}){
    return Vapi.findOne(options);
}

const findById = function(id ,options={}){
    return Vapi.findById(id ,options)
}

const findByIdAndRemove = function(id){
    return Vapi.findByIdAndRemove(id)
}

const findByIdAndUpdate = function(id ,newData={} ,options={}){
    return Vapi.findByIdAndUpdate(id ,newData ,options)
}

const create = function(data){
    return Vapi.create(data);
}


module.exports = {
    find,
    findById,
    findByIdAndRemove,
    findByIdAndUpdate,
    create,
    findOne
}