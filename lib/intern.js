const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.currentSchool = school;
    }

    getSchool() {
        return this.currentSchool;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;