const Manager = require("../lib/manager");

describe('Manager', () => {
    it('getOfficeNumber returns the office number of the current manager instance', () => {
        let manager1 = new Manager("John", "11", "john@gmail.com", "25");
        let currentOfficeNum = manager1.getOfficeNumber();
        // Assert
        expect(currentOfficeNum).toBe("25");
    });

    it('getRole returns the role of the current manager instance', () => {

        let manager1 = new Manager("John", "11", "john@gmail.com", "25");
        let currentRole = manager1.getRole();
        // Assert
        expect(currentRole).toBe("Manager");
    });

});