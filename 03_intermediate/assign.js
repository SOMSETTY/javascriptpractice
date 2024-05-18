let getMYGrade = function(currentMarks,totalMarks){
  let mypercent = (currentMarks/totalMarks)*100

  let myGrade = '' 
  if(mypercent >=90){
    myGrade = 'A'
  } else if (mypercent>=80) {
    myGrade = 'B'
  }else if (mypercent>=70) {
    myGrade = 'c'
}else if (mypercent>=60) {
    myGrade = 'D'
}else  {
    myGrade = 'F'
 }

 return `your grade is ${myGrade} and percentage is ${mypercent}`
}
let yourResult = getMYGrade(34 , 100)

console.log(yourResult)