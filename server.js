const http = require( "http" );
const app=require("./index")
const mongoose = require("mongoose")


const port = process.env.PORT || 3000;
const server = http.createServer(app)

mongoose.connect("mongodb://MrProton:Ia3$uper@cluster0-shard-00-00.hu6ua.mongodb.net:27017,cluster0-shard-00-01.hu6ua.mongodb.net:27017,cluster0-shard-00-02.hu6ua.mongodb.net:27017/?ssl=true&replicaSet=atlas-p23u5q-shard-0&authSource=admin&retryWrites=true&w=majority", {useNewUrlParser: true})
    .then((result) => server.listen(port))
    .catch((err) => console.log(err));

