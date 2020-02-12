
const q = require('./question')
const inquirer = require("inquirer")
const fs = require("fs")

// inquirer.prompt(questions)
//   .then(function(answers){
//     console.log(answers)
//   })
inquirer 
.prompt ({
  message:"Enter your Github username",
  name:"username"
})
getInformation("username")
.then (({username})=>{
const queryUrl="https://api.github${username}/repos?per-page=100";

axios.get(queryUrl).then(({data})=>{
  const repoNameArray = data.map(({name})=>name)

  const repoNameStringList = repoNameArr.join("\n");
  fs.writeFile("repos.txt",repoNameStringList,err=>{
    if(err){
      return console.log(err);
    }
    console.log("sucess");
  });
});
});


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