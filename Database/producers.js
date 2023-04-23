const mongoose = require("mongoose")

const Producer = mongoose.Schema({
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

const Producer_Model =mongoose.model("Producer",Producer)

module.exports =Producer_Model