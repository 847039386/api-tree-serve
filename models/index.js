const mongoose      = require("mongoose");
const config        = require('../config')
mongoose.connect(`mongodb://${config.db.host}:${config.db.port || 27017 }/${config.db.database}`, {
    poolSize :20,
    useNewUrlParser :true,
    useUnifiedTopology: true
}, function (err) {
    if (err) {
        process.exit(1);
    }
});
mongoose.Promise = global.Promise;


exports.Project =  require('./project');
exports.Vapi =  require('./vapi');
exports.Varied =  require('./varied');