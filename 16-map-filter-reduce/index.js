let arr1 = [54, 34, 64]
// console.log(arr)
let a = arr1.map((value, index, array)=>{
    // console.log(value, index, array)
    return value + 1
})
// console.log(a)

let arr2 = [54, 34, 64, 0, 4, 5]
let a2= arr2.filter((a)=> {
    return a<10
})
// console.log(a2)

let arr3 = [1,2 ,3,4,5,3,2,1]
const reduce_func = (h1, h2)=> {
    return h1+ h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)