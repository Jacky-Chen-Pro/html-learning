var company = new Object();
company.name = "Fackbook";
company.value = "www.facebook.com";
company.ceo = new Object();
company.ceo.firstName = "mark";
company.ceo.favColor = "blue";
console.log(company);
console.log("Company CEO's firstName:" + company.ceo.firstName +",his favColor is:" + company.ceo.favColor);

console.log(company["name"])
console.log(company["value"])
company.$stock = 110;
var stockName = "stock of company";
company[stockName] = 110;

console.log(company)
console.log("stock of company:" + company[stockName]);

//Better way: object literal
var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor:  "blude"
	},
	$stock: 110,
	"stock of company" : 110
};

console.log("name:" + facebook.name + ", firstName:" + facebook.ceo.firstName +",stock:" + facebook["stock of company"]);
