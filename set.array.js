let arr = [1,2,3,3,4,4,5,6,7,7,8]

let st = new Set(arr) // iterable
st.add(9) // value
console.log(st)
console.log([...st])