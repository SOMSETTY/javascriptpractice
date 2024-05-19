function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("n");
    console.log("d");
    console.log("e");
    console.log("e");
    console.log("p");
}
//sayMyName()

// console.assertlog(myName)


// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,"4")
// addTwoNumbers(3,4)
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3,5)

// console.log("Result:",result)

function loginUserMessage(username="sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    // if(username === undefined){
    //     console.log("please enter a username");
    //     return
    // }
return `${username} just logged in`
}
// console.log(loginUserMessage("sandeep"))
// console.log(loginUserMessage("sandeep"))


function calculateCartPrice(...num1){
return num1
}

// console.log(calculateCartPrice(200,4004,500,4999))


const user = {
    username : "hitesh",
    prices : 199
}

// function handleObject(anyobject){
//   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
// }
// handleObject(user)

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`)
  }
  handleObject(user)

  //handleObject(user)
  handleObject({
    username: "sam",
    price:299
  })

  const myNewArray = [200,300,400]

  function returnSecondValue(getArray){
   return getArray[2]
  }
console.log(returnSecondValue(myNewArray))