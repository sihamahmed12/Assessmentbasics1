let password = 'Hennepin2012'

let isNum = /\d/.test(password)
let isLetter = /[a-zA-z]/.test(password) 
let length = password.length 
let upperCase = /[A-Z]/.test(password)
password != "password" , "letmein" 

// console.log(isNum) 
// console.log(isLetter) 
 //console.log (length)
//console.log(upperCase)
  
  if ((password.length >= 10) && isNum === true && isLetter === true && upperCase === true)  {
    console.log("Sucess")
  }  else {
    console.log("Fail")
  }
