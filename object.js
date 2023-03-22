var varname = "lName";
let person = {
	name: "Mourad",
	[varname]: "BARKOUCH", //? dynamic attribute
	adress: {
		city: "Casablanca",
		country: "Morocco",
	},
	infos() {
		console.log(
			`Fist name : ${this.name} \nlast name : ${this.lName} \nCountry : ${this.adress.country}`
		);
	},
};

person.infos();

person.age = 26;
person.infos = function () {
	person.infos;
	console.log("Age : " + person.age);
};

person.infos();

//! Destructuring assignment

let {
	name: fname,
	lName,
	age,
	gendre = "M",
	adress: { city },
} = person;
const { country } = person.adress;
console.log(age, fname, lName, city, country);

var [one, two, three, , five] = [1, 2, 3, 4, 5]; //!  skip 4
console.log(one, two, three, five);

//! swap
var one = 2,
	two = 1;
[one, two] = [two, one];
console.log(one, two);
