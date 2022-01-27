const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        var officeNumber = officeNum;
        super(name, id, email);
    }

    getOfficeNumber() {
        return officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;