//packages needed for this application
const inquirer = require(`inquirer`);
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'name',
            message: `What is your Github user name?`,
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your E-mail address?',
        },
        {
            type: 'input',
            name: 'title',
            message: `What is the name of the project we are creating a README for?`,
        },
        {
            type: 'input',
            name: 'description',
            message: `Please enter a description of the project.`,
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license do you need to include?',
            choices: ['MIT', 'APACHE 2.0', 'Boost', 'BSD 3', 'None'],
        },
        {
            type: 'input',
            name: 'install',
            message: 'What intalling commands are required for your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What usage instructions would you like to add?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please add any contribution guidelines neccessary.',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please add any neccessary testing instructions.',
        },
    ];

//function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) => {
        if (err) throw err;
    });
}

//function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile(generateMarkdown(data))
    });
};

// Function call to initialize app
init();
