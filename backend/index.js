const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(express.json());
app.use(cors()),

mongoose.connect("mongodb+srv://sknuman2109:SKNUMAN1@myfirstdata.ja43f2h.mongodb.net/MERNCRUD").then(() => {
    console.log("mongodb is connected");
}).catch((error)=>{
    console.log(error)
})

//userschema
const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        Email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
    },{timestamps:true})

const User = mongoose.model("User", userSchema);
//createuser
app.post("/createuser", async(req,res) => {
    try {
        const bodyData = req.body;
        const user = new User(bodyData);
        const userData= await user.save();
        res.send(userData)
    } catch(error) {
        res.send(error)
    }
});
//read all user

app.get("/readalluser", async(req,res) => {
    try {
        const userData = await User.find({});
        res.send(userData);
    } catch (error) {
        res.send(error)
    }
});

//singleread
app.get("/read/:id", async (req,res) => {
try {
    const id = req.params.id;
    const user = await User.findById({ _id:id })
    res.send(user)
} catch (error) {
    res.send(error)
}
});

//udateuser
app.put("/updateuser/:id", async(req,res) => {
    try {
        const id = req.params.id
        const user = await User.findByIdAndUpdate({_id:id}, req.body,{new:true});
        res.send(user)
    } catch (error) {
        res.send(error)
    }
});

//delete
app.delete("/delete/:id",async (req,res) => {
    try {
        const id = req.params.id
        const user = await User.findByIdAndDelete({_id:id})
        res.send(user)
    } catch (error) {
       res.send(error)
    }
});

app.listen(PORT);


