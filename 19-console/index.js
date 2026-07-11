console.log("log")
console.info("info")
console.warn("warn")
console.error("error")
console.assert("err" !=false)
console.assert("err" ==true)
console.time("for loop")
for (let i = 0; i < 100; i++) {
    console.log(233)
}
console.timeEnd("for loop")

console.time("while loop")
let i = 0;
while (i < 100) {
    console.log(233);
    i++;
}
console.timeEnd("while loop")