//  singleton
//Object.create

// object literals

// const mysys = Symbol("key1")


// const jsUser = {
//     name : "hitesh",
//     "full name":"somsetty sandeep kumar",
//     age: 18,
//     [mysys]:"mykey1",
//     location:"hyderabad",
//     email:"somesetty@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays:["monday","tuesday"]
// }

// console.log(jsUser.location) // it isone method of accesing objective.

// console.log(jsUser["email"])
// console.log(jsUser["age"])
// console.log(jsUser["full name"])
// console.log(jsUser[mysys]);

// jsUser.email= "s.somsetty@gmail.com";
// Object.freeze(jsUser)
// jsUser.email="hitesh@microsoft.com"
// console.log(jsUser)


// jsUser.greeting = function(){
//     console.log("hello js user")
// }
// jsUser.greetingtwo = function(){
//     console.log(`hello js user,${this.name}`)
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingtwo());

//second method of writing object
const jsUser = {}

     jsUser.id = "hitesh",
    jsUser.fullname ="somsetty sandeep kumar",
    jsUser.age= 18,
    jsUser.location="hyderabad",
    jsUser.email="somesetty@gmail.com",
    jsUser.isLoggedIn= false,
    jsUser.lastLoginDays=["monday","tuesday"]

    console.log(jsUser)