let password = 'Hennepin2022'

// let passWord = password.split('')

let isNum = /\d/.test(password)
let isLetter = /[a-zA-z]/.test(password) 
password != "password"

// console.log(isNum) 
// console.log(isLetter) 
 //console.log (length)
  
  if ((password.length >= 10) && isNum === true && isLetter === true)  {
    console.log("Sucess")
  }  else {
    console.log("Fail")
  }
