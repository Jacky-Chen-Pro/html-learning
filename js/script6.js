//var array = new Array();
//array[0] = "Yaakov";
//array[1] = 2;
//array[2] = function (name) {
//	console.log("hellow " + name);
//};
//array[3] = {course: "HTML, CSS & JS"};
//
//console.log(array);
//console.log(array[1]);
//array[2]("Jacky");
//console.log(array[3].course);


//short hand array creation
//var names = [
//	{name: "Yaakov"}, 
//	{name: "John"}, 
//	"Joe"];
//
//console.log(names);
//
//for (var i = 0; i < names.length; i++) {
//	console.log(names[i]);
//}
//
//names[100] = "Jim";
//
//for (var i = 0; i < names.length; i++) {
//	console.log(names[i]);
//}


var names2 = [
	"Yaakov",
	"John",
	"Joe"]
	
//var myObj = {
//	name : "Yaakov",
//	course: "Html/CSS/JS",
//	platform: "Coursera"
//};
//
//for(var prop in myObj) {
//	console.log(prop +": " + myObj[prop]);
//}

names2.greeting = "Hi!";
for(var name in names2) {
	console.log("hello: " + names2[name]);
}
