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
module.exports = [
    {
      type: 'input',
      message: 'What is your GitHub Username?',
      name: 'username',
      validate: function(nameInput) {
        if (nameInput) {
          return true;
        }
  
        return false;
      }
    },
  
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
      validate: function(emailInput) {
        return /^.+@.+\..+$/gi.test(emailInput) ? true : false;
      }
    },
    {
      type: 'input',
      message: 'What is your project Title?',
      name: 'title',
      validate: function(nameInput) {
      if (nameInput) {
        return true;
      }
  
      return false;
      }
      
    },
    {
      type: 'input',
      message: 'project Description',
      name: 'description',
  
    },
    {
      type: 'input',
      message: 'Installation',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Usage',
      name: 'usage',
    
    }
    ]

  