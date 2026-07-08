// let num = [1, 2 ,3 , 4, 5, 6, 7, 8, 9]
// let num_more = [10, 11, 12 ,13 , 14, 15, 16, 17 ,18]
// console.log(num.length)
// delete num[0]
// console.log(num)
// console.log(num.length)
// let newArray = num.concat(num_more)
// console.log(newArray)
// console.log(num , num_more)


// let compare = (a, b)=>{
//     return a - b
// }
// let num1 = [13, 72 ,333 , 44, 59, 56, 77, 118, 9]
// num1.sort(compare)
// num1.reverse()
// console.log(num1)


let num1 = [13, 72, 333, 44, 59, 56, 77, 118, 9]
num1.splice(2, 3, 1021, 1022, 1023 ,1024 ,1025)
console.log(num1)
new_num1 = num1.slice(3)
console.log(new_num1)