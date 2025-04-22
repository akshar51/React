// SLICE(START,END) GIVE ELEMENT FROM START TO WHERE WE WANT
// let arr = [1,2,3,4,5,6]
// let arr1 = arr.slice(0,3);
// console.log(arr1);

// SPLICE(ELEMENT AT 4, DELETE AFTER 4)
// let arr = [1,2,3,4,5,6]
// let arr1 = arr.splice(4,1);
// console.log(arr1);
// console.log(arr)

// SPREAD (MERGE OBJECT AND ARRAY)
let arr1 = [1,2,3,4]
let arr2 = [5,5,5,5]

let arr = [...arr1,...arr2]
console.log(arr)