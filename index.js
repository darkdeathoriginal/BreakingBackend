const express = require("express")
const mongoose = require("mongoose")
const Movies = require("./API/Movies/index")
const Director = require("./API/Director/index")
const Producers = require("./API/Producers/index")
require("dotenv").config()
const Database_url=process.env.Database_url

mongoose.connect(Database_url).then(()=>console.log("Database connected"))

const app = express()
app.use(express.json())
app.use("/movie",Movies)
app.use("/director",Director)
app.use("/producer",Producers)

app.listen(3000,()=>console.log("app running on port 3000"))