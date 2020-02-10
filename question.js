/*
- title
- description
- instalattion
- usage
- license
- contributing
- texts
- question
  github email, profile picture

*/

const questions = {
  init: [{
      name: 'title',
      type: 'input',
      message: 'What is your project title?'
    },
    {
      name: 'description',
      type: 'input',
      message: 'What is your project about?'
    },

    {
      name: "usage",
      type: 'input',
      message: 'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
      name: "credits",
      type: 'input',
      message: `List your collaborators, if any, with links to their GitHub profiles. \nIf you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. \nIf you followed tutorials, include links to those here as well.`
    },
  ],
  //  value === which question they are continueing, ('usage', 'installation', 'credits')
  continueQuestion: function (val) {
    if (!val) {
      val = 'undefined'
    }
    return {
      name: 'continue',
      type: 'list',
      message: 'Would you like to add another ' + val + '?',
      choices: ['YES', 'NO']
    }
  },
  installation: {
    label: 'installation istruction',
    question: {
      name: 'input',
      type: 'input',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running'
    }
  }
}

module.exports = questions