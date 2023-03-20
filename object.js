let person = {
    name : 'Mourad',
    lName : 'BARKOUCH',
    adress: {
        city: 'Casablanca',
        country : 'Morocco'
    },
    infos : function() {console.log(`Fist name : ${this.name} \nlast name : ${this.lName} \nCountry : ${this.adress.country}`)}
}

person.infos()

person.age = 26
person.infos = function(){ person.infos; console.log('Age : '+person.age)}

person.infos()

//! Destructuring assignment

let {name, lName, age} = person
console.log(age,name,lName)

let [one, two, three] = [1,2,3]
console.log(one, two, three)