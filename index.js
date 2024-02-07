const express = require("express")
const app = express()
const ejs = require("ejs")
app.set("view engine", "ejs")
const bodypaser=require("body-parser")
app.use(bodypaser.json())
app.use(bodypaser.urlencoded({extends:true}))

// app.get("/welcome" ,(req,res)=>{
// res.send("welcome")
// res.send({name:"sodiq",class:"level3",age:20})
// })
// app.get("/welcome" ,(request,response)=>{
// // response.send("welcome")
// response.send({name:"sodiq",class:"level3",age:20})
// })
// app.get("/welcome" ,(request,response)=>{
// // response.send("welcome")
// response.send({name:"sodiq",class:"level3",age:20})
// })

app.get("/welcome", (req, res) => {
     res.send("welcome")
    // // res.send({name:"sodiq",class:"level3",age:20})
    // console.log(__dirname);
    // // res.sendFile(__dirname + "/index.html")
    // res.render("index",{name:"sodiq",level:"level3",age:20})
})

app.post("/signup",(req,res)=>{
    console.log("welcome to sign up");
    console.log(req.body);
}
)

app.listen("5000", () => {
    console.log("this server is no fire");
})