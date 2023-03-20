var arr = [10,20,30,40,40]
arr = arr.map(e => e*10) //? return value
console.log(arr)

arr = arr.filter(e => e <= 300) //? return collection of objects that its condition equals true
console.log(arr)

arr = arr.reduce((previousVal, currentVal) => previousVal + currentVal)
console.log(arr)

var test = function(arr_) {
    arr_ = arr_.reduce((pre, cur) => (pre+cur))
    return [arr_, arr_.length]
}

console.log(test(arr))