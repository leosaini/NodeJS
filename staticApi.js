let express = require("express");
let fs = require("fs");
let app = express()

app.get("/", function(req,res){
    res.send("Message")
})

app.listen(3000);