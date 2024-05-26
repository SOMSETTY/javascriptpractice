const user = {
    username : " sandeep",
    price : 299,

    welcomeMessage : function(){
        console.log(`${this.username} welcome to website & price of course is ${this.price}`)
        // console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);