//chapter 5 practice set

//Practise Q1
// let arr = [1,2,3,4,5,6]
// let a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

//Practise Q2
// let arr = [1, 2, 3, 4, 5, 6]
// let a;
// do {
//     a = prompt("Enter a number")
//     a = Number.parseInt(a)
//     arr.push(a)
// } while (a != 0)

// console.log(arr)

//Practise Q3
// let arr = [1, 20, 3, 40, 54, 61, 90,180]
// let n = arr.filter((x)=>{
//     return x%10 == 0;
// })
// console.log(n)

//Practise Q4
// let arr = [1, 20, 3, 40, 54, 61, 90,180]
// let n = arr.map((x)=>{
//     return x**2
// })
// console.log(n)

//Practise Q5
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let n = arr.reduce((x1, x2) => {
    return x1 * x2
})
console.log(n)