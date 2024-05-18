// && -- AND operator -BOTH SIDES NEED TO BE TRUE 
// || -- or operation - one side need to true 


let isVerified = false
let isLoggedIn = true
let hasPaymentToken = false
let isGuest = false

if(isVerified && isLoggedIn && hasPaymentToken) {
     console.log('Greeting message to user')
     console.log('Grant acess to paid course')
} else if (isVerified || isGuest) {
    console.log('Allow free previews')
} else {
    console.log('Message: please contact admin')
}
 