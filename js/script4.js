//primitive Types 普通类型的变量复制，这一类型的复制不是地址的复制而是内容的复制
//var a = 7;
//var b = a;
//console.log("a: " + a);
//console.log("b: " + b);
//
//b = 5;
//console.log("after b update:");
//console.log("a: " + a);
//console.log("b: " + b);

//Object 类型的变量复制,是地址或者指针的复制，导致改动一个的内容，另一个也会发生改动
//var a = { x:7 };
//var b = a;
//console.log(a);
//console.log(b);
//
//b.x = 5;
//console.log(a);
//console.log(b);

function changeObject(objValue) {
	console.log("in changeObject...");
	console.log("before:");
	console.log(objValue);
	
	objValue.x = 5;
	console.log("after:");
	console.log(objValue);
}

value = {x:7};
changeObject(value);
console.log("after changeObject, orig value:");
console.log(value)

