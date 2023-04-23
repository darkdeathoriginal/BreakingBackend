const mongoose = require("mongoose")

const Director = mongoose.Schema({
    id:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    movies:{
        type:[String],
        require:false
    }

})

const Director_Model = mongoose.model("Director",Director)

module.exports = Director_Model
