var array = new Array();
array[0] = "Yaakov";
array[1] = 2;
array[2] = function (name) {
	console.log("hellow " + name);
};
array[3] = {course: "HTML, CSS & JS"};

console.log(array);
console.log(array[1]);
array[2]("Jacky");
console.log(array[3].course);
