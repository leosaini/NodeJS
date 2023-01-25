let express = require("express");
const MongoClient = require("mongodb").MongoClient;
let app = express()
let data = require("./data/RestaurantData.json");

// connect local
// const url = "mongodb://localhost:27017";

const url ="mongodb+srv://latxtechnologies:xP1HIfd9sETa16lG@cluster0.kqzypwq.mongodb.net/latxtechnologies";

app.get("/",function(req,res){
    res.send("Server Started..");
})
app.get("/location",function(req,res){
    db.collection('Location').find({"location_id" : 1}).toArray((err, data)=>{
        if(err) throw err;
        res.send(data)
    })
})

app.get("/menu",function(req,res){
    db.collection('RestaurantMenu').find().toArray((err, data)=>{
        if(err) throw err;
        res.send(data)
    })
})

app.get("/restro",function(req,res){
    db.collection('RestaurantData').find().toArray((err, data)=>{
        if(err) throw err;
        res.send(data)
    })
})

app.get("/meal",function(req,res){
    db.collection('MealType').find().toArray((err, data)=>{
        if(err) throw err;
        res.send(data)
    })
})




MongoClient.connect(url, (err, connection)=>{
    if(err) throw err;
    db = connection.db('studentDtabase');
})

app.listen(4000);