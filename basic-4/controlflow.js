// if
// const isUserloggedIn = true

// const temperature = 41

// if (temperature === 40) {
//     console.log("less than 50 ")
// } else {
//     console.log("temperature is  greater than 50")
// }

// if ( 2 != 3){
//     console.log("executied");
// }

// const score = 200

// if (score>100){

//     let power = "fly"
//     console.log(`User Power: $ {Power}`);
// }
// console.log(`User Power: $ {Power}`);


// const balance = 1000 

// // if ( balance> 500) console.log("test"),console.log("test2")
// if (balance <500 ) {
//     console.log("less than 500")        
// } else if (balance<750){
//     console.log("less than 750")
// } else if (balance<900){
//     console.log("less than 900")
// }   else {
//     console.log("less than 1200")
// }


const UserloggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (UserloggedIn && debitcard && 2==3) {
    console.log("Allow to buy")
}

if (loggedInFromGoogle||loggedInFromEmail){
    console.log("User is loggedin")
}



