const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

var templateStr = ``;

inquirer
    // sets up the prompts to be shown to the user
    .prompt([
        // This first set of prompts is for the manager's information
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
        // Assigns the user inputs to a new instance of the Manager class
        var newManager = new Manager(data.managerName, data.managerID,
            data.managerEmail, managerOfficeNum);

        // Calls on the methods of the Manager class and assigns them to a usuable variable
        let uniqueRole = newManager.getRole();
        let uniqueName = newManager.getName();
        let uniqueID = newManager.getId();
        let uniqueEmail = newManager.getEmail();
        let uniqueOffNum = newManager.getOfficeNumber();

        // Formatting such as spaces, indents, tabs are still stored in the template string
        // So we have to keep those in there to prevent the output file from having bad syntax
        // The template strings may or may not look pleasant.
        var managerStr = `
        <div class="card m-5 mt-4" style="width: 18rem;">
            <div class="card-header text-center text-white bg-success bg-opacity-75">
                ${uniqueRole}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${uniqueName}</li>
                <li class="list-group-item">ID: ${uniqueID}</li>
                <li class="list-group-item">Email: ${uniqueEmail}</li>
                <li class="list-group-item">Office Number: ${uniqueOffNum}</li>
            </ul>
        </div>
  
    `;
        // Concatenates the manager's template string to the initial template string for the output file.
        templateStr += managerStr;

        console.log(newManager);

        // Executes the function depending on user input
        if(data.addEmployee === "Engineer") {
            addEngineer();
        }

        if(data.addEmployee === "Intern") {
            addIntern();
        }

    })

function addEngineer() {

    inquirer
    .prompt([
        // This second set of prompts is for the engineer's information
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
        var newEngineer = new Engineer(data.engineerName, data.engineerID,
                                    data.engineerEmail, data.engineerGithub);

        let uniqueRole = newIntern.getRole();
        let uniqueName = newIntern.getName();
        let uniqueID = newIntern.getId();
        let uniqueEmail = newIntern.getEmail();
        let uniqueGithub = newIntern.getGithub();
        
        var engineerStr = `
        <div class="card m-5 mt-4" style="width: 18rem;">
            <div class="card-header text-center text-white bg-success bg-opacity-75">
                ${uniqueRole}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${uniqueName}</li>
                <li class="list-group-item">ID: ${uniqueID}</li>
                <li class="list-group-item">Email: ${uniqueEmail}</li>
                <li class="list-group-item">Github: ${uniqueGithub}</li>
            </ul>
        </div>
  
    `;
        templateStr += engineerStr;

        console.log(newEngineer);

        if(data.addEmployee === "Engineer") {
            addEngineer();
        }
        
        if(data.addEmployee === "Intern") {
            addIntern();
        }
    })
}

function addIntern() {

    inquirer
    .prompt([
        // This third set of prompts is for the intern's information
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
        var newIntern = new Intern(data.internName, data.internID,
            data.internEmail, data.internSchool);

        let uniqueRole = newIntern.getRole();
        let uniqueName = newIntern.getName();
        let uniqueID = newIntern.getId();
        let uniqueEmail = newIntern.getEmail();
        let uniqueSchool = newIntern.getSchool();

        var internStr = `
        <div class="card m-5 mt-4" style="width: 18rem;">
            <div class="card-header text-center text-white bg-success bg-opacity-75">
                ${uniqueRole}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${uniqueName}</li>
                <li class="list-group-item">ID: ${uniqueID}</li>
                <li class="list-group-item">Email: ${uniqueEmail}</li>
                <li class="list-group-item">Github: ${uniqueSchool}</li>
            </ul>
        </div>
  
    `;
        templateStr += internStr;
        
        console.log(newIntern);

        if(data.addEmployee === "Engineer") {
            addEngineer();
        }
        
        if(data.addEmployee === "Intern") {
            addIntern();
        }
    })
}