const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');

const generateMarkdown = require('./generate-markdown');
const questions = require('./questions');

// getInformation('questions')
//   .then(data => {
//     const readme = data.map((line, i) => '\n(' + (i + 1) + ") " + line)
//     fs.writeFile('./README.md', readme, err => {
//       if (err) console.log(err)
//     })
//   })
//   .catch(err => console.error(err))

inquirer.prompt(questions).then(responseObj => {
  const queryUrl = `https://api.github.com/users/${responseObj.username}`;
  
  axios.get(queryUrl)
       .then(({ data }) => {
         console.log(data);
      
      const markdownData = { data, ...responseObj};

      
      const finishedMarkdown = generateMarkdown(markdownData);

      
      fs.writeFile('README.md', finishedMarkdown, err => {
        if (err) {
          return console.log(err);
        }
        console.log('success!');
      });
  });
});