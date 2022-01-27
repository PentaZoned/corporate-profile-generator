const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        var githubUsername = github;
        super(name, id, email)
    }

    getGithub() {
        return githubUsername;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;