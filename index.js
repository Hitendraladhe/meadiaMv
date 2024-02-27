const express = require("express");
require("./conn.js")
const bodyParser = require('body-parser');
const User = require('./models/userModles.js')
const Blog =  require('./models/userBlogs.js')
const app = express();
const port = process.env.PORT||8000
const router = express.Router(); 
app.use(bodyParser.json());

app.use(express.json());

app.use(router);

router.get("/AllBlogs", async(req, res)=>{
    const getAll = await Blog.aggregate([
        {
          $project: {
            _id: 0, 
            blog: 1 
          }
        }
      ])
    console.log("hello Home");
    res.send(getAll)
})

router.get("/AllBlogs/comment", async(req, res)=>{
    const getAllCommment = await Blog.aggregate([
        {
          $project: {
            _id: 0, 
            comment: 1 
          }
        }
      ])
    console.log("hello Home");
    res.send(getAllCommment)
})


router.post("/AllBlogs", async(req, res)=>{
    const Allblog = await Blog(req.body);
    Allblog.save();
    console.log("hello Home");
    res.send(Allblog);
})

router.post("/SignUp", async(req, res)=>{
    console.log("hello Home");
    const data = await User(req.body)
    data.save();
    res.send(data);
})

router.get("/SignUp", async(req, res)=>{
    console.log("hello Home");
    const dat = await User.find()
    res.send(dat);
})

app.listen(port,()=>{
    console.log(`Hello Server is running ${port}`);
});