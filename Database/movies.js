const mongoose = require("mongoose")

const MovieSchema = mongoose.Schema({
    movie_id:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    directors:{
        type:[Number],
        require:true
    },
    producers:{
        type:[Number],
        require:true
    },
    languages:{
        type:String,
        require:true
    },
    release_date:{
        type:String,
        require:true
    },
    genres:{
        type:[String],
        require:true
    },
})

const MovieModel = mongoose.model("Movies",MovieSchema)

module.exports = MovieModel