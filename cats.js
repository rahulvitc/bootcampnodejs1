var mongoose = require("mongoose");
//now to connect the mongoose 

//mongoose.connect("mongodb://localhost/demo",{useMongoClient: true});

mongoose.connect("mongodb://rahul:rahul123@ds127731.mlab.com:27731/test1",{useMongoClient: true});
// requires the useMongoClient true unless it will not work

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

//var Cat = mongoose.model("Cat", catSchema);

var george = new Cat({
	name: "Mrs. Norris1",
	age: 7,
	temperament: "Evil"
});
george.save();

george.save(function(err,cat){
	if (err) {
		console.log("error");
	}else{
		console.log("done");
		console.log(cat);
	}
});
