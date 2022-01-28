const Manager = require("../lib/manager");

describe('Manager', () => {
    it('getName returns the name of the current manager instace', () => {

        let manager1 = new Manager("John", "11", "john@gmail.com", "25");
        let currentName = manager1.getName();
        // Assert
        expect(currentName).toBe("John");
    });

    it('getId returns the Id of the current manager instance', () => {

        let manager1 = new Manager("John", "11", "john@gmail.com", "25");
        let currentId = manager1.getId();
        // Assert
        expect(currentId).toBe("11");
    });

    it('getEmail returns the email of the current manager instance', () => {

        let manager1 = new Manager("John", "11", "john@gmail.com", "25");
        let currentEmail = manager1.getEmail();
        // Assert
        expect(currentEmail).toBe("john@gmail.com");
    });

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