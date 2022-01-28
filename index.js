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
            data.managerEmail, data.managerOfficeNum);

        // Calls on the methods of the Manager class and assigns them to usuable variables
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
                <li class="list-group-item">Email: <a href="mailto:${uniqueEmail}">${uniqueEmail}</a></li>
                <li class="list-group-item">Office Number: ${uniqueOffNum}</li>
            </ul>
        </div>
  
    `;
        // Concatenates the manager's template string to the initial template string for the output file.
        templateStr += managerStr;

        // Executes the function depending on user input
        if(data.addEmployee === "Engineer") {
            addEngineer();
        } else if(data.addEmployee === "Intern") {
            addIntern();
        } else {
            generateHTML();
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
        // Creates a new instance of the Engineer class
        var newEngineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGithub);

        // Calls on the methods of the Engineer class and assigns them to usuable variables
        let uniqueRole = newEngineer.getRole();
        let uniqueName = newEngineer.getName();
        let uniqueID = newEngineer.getId();
        let uniqueEmail = newEngineer.getEmail();
        let uniqueGithub = newEngineer.getGithub();
        
        // template string for the engineer card
        var engineerStr = `
        <div class="card m-5 mt-4" style="width: 18rem;">
            <div class="card-header text-center text-white bg-success bg-opacity-75">
                ${uniqueRole}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${uniqueName}</li>
                <li class="list-group-item">ID: ${uniqueID}</li>
                <li class="list-group-item">Email: <a href="mailto:${uniqueEmail}">${uniqueEmail}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${uniqueGithub}" target="_blank">${uniqueGithub}</a></li>
            </ul>
        </div>
  
    `;
        templateStr += engineerStr;

        if(data.addEmployee === "Engineer") {
            addEngineer();
        } else if(data.addEmployee === "Intern") {
            addIntern();
        } else {
            generateHTML();
        }
    })
}

// Function adds 
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
        // Creates a new instance of the Intern class
        var newIntern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool);

        // Calls on the methods of the Intern class and assigns them to usuable variables
        let uniqueRole = newIntern.getRole();
        let uniqueName = newIntern.getName();
        let uniqueID = newIntern.getId();
        let uniqueEmail = newIntern.getEmail();
        let uniqueSchool = newIntern.getSchool();

        // template string for the intern card
        var internStr = `
        <div class="card m-5 mt-4" style="width: 18rem;">
            <div class="card-header text-center text-white bg-success bg-opacity-75">
                ${uniqueRole}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${uniqueName}</li>
                <li class="list-group-item">ID: ${uniqueID}</li>
                <li class="list-group-item">Email: <a href="mailto:${uniqueEmail}">${uniqueEmail}</a></li>
                <li class="list-group-item">School: ${uniqueSchool}</li>
            </ul>
        </div>
  
    `;
        templateStr += internStr;

        if(data.addEmployee === "Engineer") {
            addEngineer();
        } else if(data.addEmployee === "Intern") {
            addIntern();
        } else {
            generateHTML();
        }
    })
}

// Function combines all of the template strings together and writes to a file, creating a HTML page with all of the information gathered
function generateHTML() {
    // The first part of the HTML document
    const upperString = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    
    <body>
        <div class="d-flex justify-content-center p-5 bg-primary text-white bg-gradient">
            <h1>Team Members</h1>
        </div>
    
        <div class="d-flex flex-row flex-wrap my-5 justify-content-evenly">`;

    // The last part of the HTML document
    const lowerString = `</div>
    </body>
    
    </html>`;

    // Creates the all-in-one template string
    let newString = upperString + templateStr + lowerString;

    // Writes a file named 'index.html' in the dist folder containing the information in newString
    fs.writeFile('./dist/index.html', newString, (err) =>
        err ? console.log(err) : console.log("Success!")
    );
}