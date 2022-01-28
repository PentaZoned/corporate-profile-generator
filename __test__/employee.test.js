const Employee = require("../lib/employee");

describe('Employee', () => {
    it('getName returns the name of the current employee instace', () => {

        let employee1 = new Employee("Emily", "10", "emily@gmail.com");
        let currentName = employee1.getName();
        // Assert
        expect(currentName).toBe("Emily");
    });

    it('getId returns the Id of the current employee instance', () => {

        let employee1 = new Employee("Emily", "10", "emily@gmail.com");
        let currentId = employee1.getId();
        // Assert
        expect(currentId).toBe("10");
    });

    it('getEmail returns the email of the current employee instance', () => {

        let employee1 = new Employee("Emily", "10", "emily@gmail.com");
        let currentEmail = employee1.getEmail();
        // Assert
        expect(currentEmail).toBe("emily@gmail.com");
    });

    it('getRole returns the role of the current employee instance', () => {

        let employee1 = new Employee("Emily", "10", "emily@gmail.com");
        let currentRole = employee1.getRole();
        // Assert
        expect(currentRole).toBe("Employee");
    });
});