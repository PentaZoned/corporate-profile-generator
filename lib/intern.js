const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        var currentSchool = school;
        super(name, id, email);
    }

    getSchool() {
        return currentSchool;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;