let userEmail = 'abc123abv'
let passWord = '1234567'

let userChecker = function(mystring){
    if ((mystring.includes(123  )) && (mystring.lenth > 6)) {
        return true
    } 
    return false
}

console.log(userChecker(userEmail))


let passChecker = function(passWord) {
    if ((mystring.includes('1234')) && (mystring.lenth > 8)) {
        return true
    } else
    return false
}
console.log(passChecker(passWord))
