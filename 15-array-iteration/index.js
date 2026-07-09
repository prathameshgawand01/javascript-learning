let num = [3, 4, 45 ,5, 6]
// for(let i=0; i<num.length; i++){
//     console.log(i)
// }

num.forEach((element)=>{
    console.log(element*element)
})

let name ="Harry"
let arr = Array.from(name)
console.log(arr)


for (let i of num){
    console.log(i)
}
 for ( let item in num){
    console.log(num[item])
 }