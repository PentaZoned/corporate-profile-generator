const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        var currentSchool = school;
        super(name, id, email);
    }

    getSchool() {

    }

    getRole() {

    }
}

module.exports = Intern;