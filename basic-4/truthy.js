const userEmail = "s@ndy.ai"

if (userEmail) {
  console.log("Got user email")
} else {
    console.log("Dont have user email")
}
/*
falsey values
 false ,0 ,-0,BigInt 0n , "", null ,undefined ,nan
remaing are truthy value

"0",'false', " " , [] ,{ } function () {}

*/

if (userEmail.length === 0){
    console.log("Array is empty object");
}

const  emptyObj = {}

if (Object.keys(emptyObj).length===0){
console.log("Object is empty");
}



// nullish coalescing operator (??) : null undefined

let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

console.log(val1)



/// terinary operator

// condition ? true : false 

const iceTeaprice = 100
iceTeaprice <= 80 ? console.log ("less than 80") : console.log("more than 80")