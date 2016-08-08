//function Circle(radius) {
//	this.radius = radius;
//	console.log(this);
//}
//
//Circle.prototype.getArea = 
//	function() {
//		return Math.PI * Math.pow(this.radius, 2);
//	};
//
////计算圆周率
//var myCircle = new Circle(10);
//console.log(myCircle);
//console.log(myCircle.getArea());
//

var literalCircle = {
	radius: 10,
	
	getArea: function() {
		console.log(this);
		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCircle.getArea());
