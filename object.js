let person = {
    name : 'Mourad',
    lName : 'BARKOUCH',
    infos : function() {console.log(`Fist name : ${this.name} \nlast name : ${this.lName}`)}
}

person.infos()

person.age = 26
person.infos = function(){ person.infos; console.log('Age : '+person.age)}

person.infos()