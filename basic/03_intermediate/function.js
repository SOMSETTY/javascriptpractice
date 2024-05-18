// let sayHello = function() {
//   console.log("Greeting message")
//   console.log("Hey user")
// }


// // console.log(sayHello)
// sayHello()


  
  
  // console.log(sayHello)
  //sayHello('john')


//   let fullNameMaker = function(firstname,lastname){
//     console.log("welcome to LCO")
//     console.log(`happy to have you ,${firstname}${lastname}`)
//   }
 // fullNameMaker('john','sam')

 let myAdder = function (num1,num2) {
   let added = num1 + num2
   return added
 }
//  myAdder(17,8)

//  console.log(myAdder(17,8));

//  let result = myAdder(8,4)
//  console.log(result)

let myMultiplier = function(num1,num2){
    return num1*num2
}
myMultiplier(5,5)

// console.log(myMultiplier(5,5))

let guestUser = function(name ='unName',coursecount= 0){
    return 'hello' + name  + 'and your course count is :' + coursecount
}
console.log(guestUser('John',1))