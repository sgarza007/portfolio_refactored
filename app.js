const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('public'))


app.get("/", function(req,res){
    res.render("index.ejs");
});

app.listen(PORT, function (){
    console.log("Server started on Port: "+PORT);
});