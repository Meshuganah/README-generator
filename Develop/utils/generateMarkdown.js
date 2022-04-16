// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  #Table of Contents
  [Title](#Project-title)

  [Description](#Project-Description)

  [Installation Instructions](#Installaltion-Instructions)

  [Usage Information](#Usage-Information)

  [License](#License)

  [Contribution Information](#Contribution-Information)

  [Tests](#Tests)

  [Questions](#Questions)

  # Project Title: ${data.title}

  # Project Description:
  ${data.description}

  # Installation Instructions:
  ${data.install}

  # Usage Information
  ${data.usage}

  # License
  //ADD LICENSE METHODS HERE

  # Contriubtion Information
  ${data.usage}

  # Tests
  ${data.test}

# Questions
If you have any questions, please reach out to:
E-mail: ${data.email}
Github: ${data.name}
`;
}

module.exports = generateMarkdown;
