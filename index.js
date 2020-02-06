const questions = require('./question')
const inquirer = require("inquirer")

// inquirer.prompt(questions)
//   .then(function(answers){
//     console.log(answers)
//   })
inquirer.prompt(questions)
  .then(answers => {
    console.log(answers)
  })

/* function Add(x, y){
  return x + y
}

const sum = Add(1, 3)
console.log(sum)

const AddES6 = (x, y) => {
  x = 5
  return x + y
}

const sumES6 = AddES6(3, 4)
console.log(sumES6)

const dummyAPI = val => new Promise((resolve, reject)=> {
  resolve(val)
})

dummyAPI("Hello")
  .then(data => console.log(data)) */