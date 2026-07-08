     function onePlusAvg(x,y){
            return 1 +(x+y)/2
        }
        const sum = (p, q)=>{
            return p+q
        }
        const hello = ()=>{
            console.log("Hello World")
            return "Hello World"
        }
        let a = 1;
        let b = 2;
        let c = 3;
        console.log("One plus Average of a and b is", onePlusAvg(a,b))
        console.log("One plus Average of b and c is", onePlusAvg(b,c))
        console.log("One plus Average of a and c is", onePlusAvg(a,c))
        console.log("Sum of 9 and 7 is", sum(9, 7))
        let v = hello();
        console.log(v)
