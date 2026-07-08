     let marks = {
            harry: 90,
            shubham: 9,
            lovish: 56,
            monika: 4
        }
        //Problem No 1
        for (let i = 0; i < Object.keys(marks).length; i++) {
            // console.log("the marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
        }
        //Problem No 2
        for (let key in marks) {
            // console.log("the marks of " + key + " are " + marks[key])
        }
        //Problem No 3
        let cn = 4
        let i
        while(i != cn) {
            console.log("try again")
            i = prompt("Enter a correct number")
     }
     console.log("You have entered a correct number ")
     //Problem No 4
     const mean = (a,b,c,d,e) =>{
         return(a+ b+ c+ d+ e) / 5
     }
     console.log(mean(2, 3 ,4 ,5 ,6))