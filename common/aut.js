var Aut = function(Schema){
    this.Schema = Schema;
    if(!Schema){
        throw new Error('Schema为必填项')
    }
}

Aut.Page = function(list ,{ pageIndex = 1 ,pageSize = 10 ,total = 0 }){
    var lastPage = true;
    var totalPages = 0;
    var result = { list ,pageIndex ,pageSize ,total ,totalPages ,lastPage  }
    if(total != 0){
        totalPages = Math.ceil(total/pageSize);
        result.totalPages = totalPages;
        result.lastPage = !(pageIndex < totalPages);
    }
    return result;
}

Aut.prototype = {
    find :function({ pageIndex = 1 ,pageSize = 10 ,options = {}}){
        var schema = this.Schema;
        var realPage = (pageIndex - 1 < 0) ? 0 : pageIndex - 1;
        var skip = realPage * pageSize;
        var query = options.query || {};
        var select = options.select || '';
        var populate = options.populate || '';
        var sort = options.sort || {}
        var schemaPromise = new Promise((resolve ,reject) => {
            var models = schema.find(query).limit(pageSize).skip(skip).sort(sort).select(select).populate(populate)
            models.exec((err ,docs) => {
                if(err){
                    reject(err)
                }else{
                    resolve(docs)
                }
            })
        });
        var countPromise = new Promise((resolve ,reject) => {
            schema.count(query).exec((err ,count) => {
                if(err){
                    reject(err)
                }else{
                    resolve(count)
                }
            })  
        });
    
        return new Promise((resolve ,reject) => {
            Promise.all([schemaPromise,countPromise]).then((result) => {
                resolve({ 
                    data : Aut.Page(result[0] ,{ pageIndex ,pageSize ,total :result[1] }),
                    success :true
                })
            }).catch((err) => {
                reject(err);
            })
        })
    },
    findById :function (id ,options={}) {
        var schema = this.Schema;
        return new Promise((resolve ,reject) => {
            schema.findById(id).populate(options.populate || '').select(options.select || '').exec((err ,docs) => {
                if(err){
                    reject(err);
                }else{
                    resolve({ success :true , data :docs})
                }
            })
        })
    },
    findOne :function(options = {}) {
        var schema = this.Schema;
        var query = options.query || {};
        var select = options.select || '';
        var populate = options.populate || '';
        return new Promise((resolve ,reject) => {
            schema.findOne(query).select(select).populate(populate).exec((err ,docs) => {
                if(err){
                    reject(err)
                }else{
                    resolve({ data :docs ,success :true })
                }
            })
        })
    },
    create :function(data) {
        var schema = this.Schema; 
        return new Promise((resolve ,reject) => {
            schema.create(data ,function(err ,docs){
                if(err){
                    reject(err)
                }else{
                    resolve({ data :docs , success :true })
                }
            })
        })
    },
    findByIdAndRemove :function(id){
        var schema = this.Schema;
        return new Promise((resolve ,reject) => {
            schema.findByIdAndRemove(id).exec((err ,docs) => {
                if(err){
                    reject(err)
                }else{
                    resolve({ success :true , data :docs});
                }
            })
        }) 
    },
    findByIdAndUpdate :function(id ,newData ,options={}) {
        var schema = this.Schema;
        return new Promise((resolve ,reject) => {
            schema.findByIdAndUpdate(id,newData,options).exec((err ,docs) => {
                if(err){
                    reject(err)
                }else{
                    resolve({ success :true , data :docs})
                }
            })
        })
    }

}


module.exports = Aut;

