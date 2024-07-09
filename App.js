const express = require("express");
const app = express();
const mongoose=require("mongoose");
app.use(express.json())


const mongoUrl="mongodb+srv://pakhamza99:bagrisami123@cluster0.34ehqx2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("Connected to DataBase")})
.catch(e=>console.log(e))

app.listen(5000,()=>{
    console.log("Server Started");
})

app.post("/post",async(req,res)=> {
    console.log(req.body);
    const {data}=req.body;

    try{
        if (data =="hamza") {
            res.send({status: "ok"});
        } else {
            res.send({status: "user not found"});
        }
    } catch {error} {
        res.send({status:"Something Went Wrong Try Again"})
    }
});
