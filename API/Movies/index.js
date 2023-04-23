const router = require("express").Router()
const Model = require("../../Database/movies")


/*
Route:/create/
Desc: creating a new movie
Parameters:
Method:POST
https://localhost:3000/movie/create

sample body:{
    "movie_id":"1",
    "title":"dfa",
    "directors":[1,2],
    "producers":[1,2],
    "languages":"ad",
    "release_date":"asa",
    "genres":["sada"]
}
*/
router.post("/create",async(req,res)=>{
    try{
        const newMovie = req.body
        console.log(newMovie);
        const add = await Model.create(newMovie)
        return res.json({
            add,
            message:"succesful"
        })
    }catch(err){
        return res.json({
            message:"failed",
            error:err
        })
    }
})
router.get("/get",async(req,res)=>{
    try{
        const Get = await Model.find()
        return res.json({
            Get,
            message:"succesful"
        })
    }catch{
        return res.json({
            message:"failed",
            error:err
        })
    }
})

router.put("/update/:movie_id", async (req, res) => {
    const updateMovie = await MovieModel.findOneAndUpdate(
      {
        movie_id: req.params.movie_id,
      },
      {
        title: req.body.movieTitle,
      }
    );
    return res.json({ Movie: updateMovie, message: "Movie's title updated" });
  });

router.delete('/delete/:movie_id',async(req,res)=>{
    const deleteMovie =await Model.findOneAndDelete({
        movie_id:req.params.movie_id
    })
    return res.json({
        message:"movie deleted"
    })
})

module.exports = router