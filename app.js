//incliude the express
var express = require("express");
//to run express express()
var app = express();

var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static("public"));
app.set("view engine","ejs");

var friends = ["rahul","kumar","singh"];

//"/" someone click => "Hi"
// "/bye" => "goodbye!"

//url path to get
//to run this function we are writing function
//what are the request and response 
app.get("/",function(req,res){
	//res.send() used to send single static html tag
	// for view another page we have to use render()
	// dynamic html files named and templates
	
	//res.send("Hi! I am here <a href='first'>first</a>");
	res.render("home.ejs");
});

app.get("/getparaonpage/id/:id/name/:name",function(req,res){
	var id = req.params.id;
	var name = req.params.name;
	res.render("displaypara.ejs",{ID:id,NAME:name});
});

app.get("/posts",function(req,res){
	var posts = [
			{title: "Post 1", author: "Susy"},
			{title: "My attitude", author: "second author"}
	];
	res.render("post.ejs",{POSTS:posts});
});

app.get("/first",function(req,res){
		res.send("first page here!");
});
app.get("/second",function(req,res){
		res.send("<b>second page here!</b>");
});


app.get("/id/:id/name/:name", function(req,res){
		console.log(req.params);
		var p1 = req.params.id;
		var n1 = req.params.name;
		res.send("id passed id is:"+p1+" name is:"+n1);
});

app.get("/friends",function(req,res){
	//var friends = ["rahul","kumar","singh"];
	res.render("friends",{friends:friends});
});

//
app.post("/addFriend",function(req,res){
	var nameadded = req.body.friendname;
	friends.push(nameadded);
	//res.render("friends",{friends:friends});
	//we can either use render to friends 
	//page or redirect  because both are using same data fetching 
	res.redirect("/friends");
});

//exercise 1 
app.get("/speak/animal/:animal",function(req,res){
			var animal = req.params.animal;
			var sound = "";
			if(animal==="pig"){
				sound = "oik oik oik";
			}else if(animal === "cow"){
				sound = "mou mou mou";
			}else{
				sound = "silent maker";
			}
		res.send("animal:" +animal+" sound: " +sound);
});

// * is used to be writen in always last function unless for all pages it will come as 
// page not found because * means what ever passed
app.get("*",function(req,res){
		res.send("404 Page Not Found");
});
//in express we a have to write a code to listen the request having method named listen() and port to listen
app.listen(3000);
console.log("server running on port no 3000");


