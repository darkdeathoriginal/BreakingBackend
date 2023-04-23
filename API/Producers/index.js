const router = require("express").Router()
const Model = require("../../Database/producers")


/*
Route:/create/
Desc: creating a new producer
Parameters:
Method:POST
https://localhost:3000/producer/create

sample body:{
    "id":1,
    "name":"name",
    "movies":["ada","asa"]
}
*/

router.post("/create",async(req,res)=>{
    try{
        const newDirector = req.body
        const add = await Model.create(newDirector)
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

router.put("/update/:id", async (req, res) => {
    const updateMovie = await MovieModel.findOneAndUpdate(
      {
        id: req.params.id,
      },
      {
        name: req.body.name,
      }
    );
    return res.json({ Movie: updateMovie, message: "Producer name updated" });
  });

router.delete('/delete/:id',async(req,res)=>{
    const deleteMovie =await Model.findOneAndDelete({
        id:req.params.id
    })
    return res.json({
        message:"producer deleted"
    })
})

module.exports = router