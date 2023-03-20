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