var x = "Hello world!";
var y = "This world is so crazy!"

var message = "in blobal";
console.log("global:message = " + message);

//var a = function() {
//	var message = "inside a";
//	console.log("a:message = " + message);
//
//	function b() {
//		console.log("b: message = " + message);
//	}
//	b();
//}

//a();
var z;
console.log(z);

//undefined means variable memory has bean allocated but no value has ever been explicitly set tye
if(z == undefined) {
	console.log("z is undefined");
}

z = 5;
if(z == undefined) {
	console.log("z is undefined");
}else {
	console.log("z is defined");
}

//firstName: 	"Yaakov",
//lastName:	"Chaikin",
//social:		{
//	linkedin:	"yaakovchaikin",
//	twitter:	"yaakovchaikin",
//	facebook:	"CourseraWebDev"
//}

//字符串拼接
var string = "hello";
string += " world";
console.log(string + "!");
//常規的運算 +-*/
console.log((5+4)/3);
console.log(undefined/5);

//js中的equal對比
var m = 4, n = 4;
if(m == n) {
	console.log("x=4 is equal to y=4");
}

m = "4";
if(m == n) {
	console.log("x='4', is equal to y=4");
}

if(m === n) {
	console.log("Strict: x='4', is equal to y=4")
}else {
	console.log("Strict: x='4', is NOT equal to y=4")
}

//這些所有都是false
if( false || null || undefined || "" || 0 || NaN) {
	console.log("This line won't ever execute");
}else {
	console.log("all false");
}

//all true
if(true && "hello" && 1 && -1 && "false") {
	console.log("All true");
;}
	
//如果return後面沒有跟東西，那麼他會直接返回undefined	
function a() {
	return 
	{
		name: "Yaakov"
	};
}

function b() {
	return {
		name: "Yaakov2"
	};
}

console.log(a());
console.log(b());

var sum = 0;

for (var i = 0; i < 10; i++) {
	sum = sum + i;
	console.log(sum);
}

console.log("sum :" + sum);

function orderChickenWith(sideDish) {
//	if(sideDish === undefined)
	sideDish = sideDish || "whatever!"
	console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();
