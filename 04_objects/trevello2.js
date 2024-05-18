let myTodos = {
    day:'monday',
    meetings: 0 ,
    meetDone: 0
}


let addMeeting = function(todo,meet = 0) {
    todo.meeting = todo.meeting + meet
}

let meetDone = function(todo, meet = 0){
    todo.meetDone = todo.meetDone + meet
}

let resetDay = function (todo){
    todo.meeting = 0
    todo.meetDone = 0
}

let getSummaryofDay =  function(todo){
    let meetLeft = todo.meeting + todo.meetDone
    return `you  have ${meetLeft} metting today! `
}

addMeeting(myTodos,4)

addMeeting(myTodos,2)

meetDone(myTodos,5)

getSummaryofDay(myTodos)

console.log(getSummaryofDay(myTodos))

console.log(myTodos)