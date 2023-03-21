//! object
var user = {}
user['name'] = 'Mourad'
user.username = 'Mo'

//! map

let mp = new Map([[0,'zero'],[function(){}, 'function']]);
mp.set('1','one').set(2,'two').set(false, 'bool')

console.log(mp)
console.log(mp.has('1'))
console.log(mp.delete('1'))
console.log(mp.get(false))
console.log(mp.size)

mp.clear()
