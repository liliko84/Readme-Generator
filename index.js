const q = require('./question')
const inquirer = require("inquirer")
const fs = require("fs")

// inquirer.prompt(questions)
//   .then(function(answers){
//     console.log(answers)
//   })

getInformation('installation')
  .then(data => {
    const readme = data.map((line, i) => '\n(' + (i + 1) + ") " + line)
    fs.writeFile('./README.md', readme, err => {
      if (err) console.log(err)
    })
  })
  .catch(err => console.error(err))

// key === "installation"
async function getInformation(key) {
  let tempArr = [];
  let complete = false;
  return new Promise(async (resolve, reject) => {
    while (!complete) {
      await inquirer.prompt(q.continueQuestion(q[key].label))
        .then(async answers => {
          if (answers.continue === 'YES') {
            await inquirer.prompt(q[key].question)
              .then(answer => {
                tempArr.push(answer.input)
              })
              .catch(err => reject(err))
          } else {
            complete = true
            resolve(tempArr)
          }
        })
        .catch(err => reject(err))
    }
  })

}

// var data = {
//   name: 'Ben',
//   age: 31
// }
// var key = 'name'
// console.log(data.key)
// console.log(data.name)
// console.log(data['name'])
// console.log(data[key])
// key = 'age'
// console.log(data[key])



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