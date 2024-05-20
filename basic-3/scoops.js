// var c = 400
let a= 300
if (true) {
    let a = 10
    const b = 30
    // var c = 40
    // console.log("INNER:",a);
}

// for( let index=0; index<array.length;index++){
//     const element = array[index];   
// }



// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = "hitesh"

    function two (){
        const website = "youtube"
        // console.log(username);
    } 
    // console.log(website)
    two()
}
one ()

if (true) {
    const username = "sandeep"
    if (username==="sandeep"){
        const website= "   youtube"
        // console.log (username + website);
    }
// console.log(website);
}
//  console.log(username);

//*********interesting**********/

console.log(addone(5))

function addone (num){
 return num + 1
}


console.log(addtwo(5))

const addtwo = function(num){
    return num + 2
}

