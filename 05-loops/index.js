        //  let sum = 0
        //  let n = prompt("Enter the value of n")
        //  n = Number .parseInt(n)
        // for (let i=0; i< n; i++) {

        //  sum +=(i+1)
        // }
        // console.log("Sum of first " + n + " natural number is " + sum)
        /*
         let fact = 1
         let n = prompt("Enter the value of n")
         n = Number .parseInt(n)
        for (let i=0; i< n; i++) {
        
         fact *=(i+1)
        }
        console.log("Sum of first " + n + " natural number is " + fact) 
        */

        let obj = {
            harry: 90,
            shubh: 45,
            shivika: 56,
            ritika: 57,
            shiv: 23
        }
        for (let key in obj) {
       
            console.log("Marks of " + key + " are " + obj[key]) 
            
        }