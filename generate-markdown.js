const generateMarkdown = profileData => {
  return `
# GitHub UserName
UserName: ${profileData.username}
![GitHub image](${profileData.data.avatar_url})
## Info
Email: [${profileData.email}](mailto:${profileData.email})
# ${profileData.title}
## Description
${profileData.description}
## Installation
${profileData.installation}
## Usage
${profileData.usag}
`;
};

module.exports = generateMarkdown;
