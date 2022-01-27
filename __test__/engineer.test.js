const Engineer = require('../lib/engineer');

describe('Engineer', () => {
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