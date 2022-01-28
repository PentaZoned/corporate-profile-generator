const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it('getName returns the name of the current instance of engineer', () => {

        let engineer1 = new Engineer("Mary", "16", "mary@gmail.com", "MaryPoppins");
        let currentName = engineer1.getName();
        // Assert
        expect(currentName).toBe("Mary");
    });

    it('getId returns the Id of the current instance of engineer', () => {

        let engineer1 = new Engineer("Mary", "16", "mary@gmail.com", "MaryPoppins");
        let currentId = engineer1.getId();
        // Assert
        expect(currentId).toBe("16");
    });

    it('getEmail returns the email of the current instance of engineer', () => {

        let engineer1 = new Engineer("Mary", "16", "mary@gmail.com", "MaryPoppins");
        let currentEmail = engineer1.getEmail();
        // Assert
        expect(currentEmail).toBe("mary@gmail.com");
    });

    it('getGithub returns the github username of the current instance of engineer', () => {

        let engineer1 = new Engineer("Mary", "16", "mary@gmail.com", "MaryPoppins");
        let currentGithub = engineer1.getGithub();
        // Assert
        expect(currentGithub).toBe("MaryPoppins");
    });

    it('getRole returns the role of the current engineer instance', () => {

        let engineer1 = new Engineer("Mary", "16", "mary@gmail.com", "MaryPoppins");
        let currentGithub = engineer1.getRole();
        // Assert
        expect(currentGithub).toBe("Engineer");
    });
});