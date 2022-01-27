const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: "Enter the manager's name.",
            name: 'managerName',
        },
        {
            type: 'input',
            message: "Enter the manager's ID.",
            name: 'managerID',
        },
        {
            type: 'input',
            message: "Enter the manager's email address.",
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: "Enter the manager's office number.",
            name: 'managerOfficeNum',
        },
        {
            type: 'list',
            message: "Which type of employee would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more employees."],
            name: 'addEmployee',
        },
    ])
    .then((data) => {
        console.log(data);

        if(data.addEmployee === "Engineer") {
            addEngineer();
        } else if(data.addEmployee === "Intern") {
            addIntern();
        } else {
            return;
        }

    })

function addEngineer() {

    inquirer
    .prompt([
        {
            type: 'input',
            message: "Enter the engineer's name.",
            name: 'engineerName',
        },
        {
            type: 'input',
            message: "Enter the engineer's ID.",
            name: 'engineerID',
        },
        {
            type: 'input',
            message: "Enter the engineer's email address.",
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: "Enter the engineer's Github username.",
            name: 'engineerGithub',
        },
        {
            type: 'list',
            message: "Which type of employee would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more employees."],
            name: 'addEmployee',
        },
    ])
    .then((data) => {
        console.log(data);

        if(data.addEmployee === "Engineer") {
            addEngineer();
        } else if(data.addEmployee === "Intern") {
            addIntern();
        } else {
            return;
        }
    })
}

function addIntern() {

    inquirer
    .prompt([
        {
            type: 'input',
            message: "Enter the intern's name.",
            name: 'internName',
        },
        {
            type: 'input',
            message: "Enter the intern's ID.",
            name: 'internID',
        },
        {
            type: 'input',
            message: "Enter the intern's email address.",
            name: 'internEmail',
        },
        {
            type: 'input',
            message: "Enter the intern's school.",
            name: 'internSchool',
        },
        {
            type: 'list',
            message: "Which type of employee would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more employees."],
            name: 'addEmployee',
        },
    ])
    .then((data) => {
        console.log(data);

        if(data.addEmployee === "Engineer") {
            addEngineer();
        } else if(data.addEmployee === "Intern") {
            addIntern();
        } else {
            return;
        }
    })
}