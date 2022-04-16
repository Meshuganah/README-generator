// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  }
  else if (license === `APACHE 2.0`) {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  }
  else if (license === `Boost`) {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
  }
  else if (license === `BSD 3`) {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`
  } else {
    return ''
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  }
  else if (license === `APACHE 2.0`) {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  else if (license === `Boost`) {
    return `https://www.boost.org/LICENSE_1_0.txt`
  }
  else if (license === `BSD 3`) {
    return `https://opensource.org/licenses/BSD-3-Clause`
  } else {
    return ''
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === `None`) {
    return ''
  } else {
    return `
    This project is licensed under: ${license}
    ${renderLicenseLink(license)}
    ${renderLicenseBadge(license)}
    `
  }
}

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
  ${renderLicenseSection(data.license)}

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
