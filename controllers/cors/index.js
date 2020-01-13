

var superAgent= require('superagent'); 

const getJSON =  async (ctx, next) => { 
    var { url ,req ,type } = ctx.request.body
    try {
        var data = await reptile(url ,req ,type);
        ctx.body = { success: true ,data}
    } catch (error) {
        ctx.body = { success :false };
    }
}   

const reptile = function(url ,req ,type){
    return new Promise((resolve ,reject) => {
        var request = superAgent;
        try {
            req = JSON.parse(req);
            type = type || 'GET';
            if(type == 'POST'){
                request = request.post(url).send(req);
            }else{
                request = request.get(url).query(req);
            }
            request.end(function(err,res){
                try {
                    var json = JSON.parse(res.text);
                    if(err){
                        reject(err)
                    }else{
                        resolve(json)
                    }
                } catch (error) {
                    reject(error)
                }
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    getJSON
}