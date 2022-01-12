var express = require("express")
var path=require("path")
var routes=require("./routes")
var app=express();
app.set("port",process.env.PORT||3000);
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(routes)
app.use(express.static("public"));
app.listen(app.get("port"),function(){
    console.log("Server is running at port "+app.get("port"));
});
