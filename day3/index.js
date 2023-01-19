let express = require("express");
let app = express()

app.get("/",function(req,res){
    res.send("Server Started..");
})

app.listen(3000);