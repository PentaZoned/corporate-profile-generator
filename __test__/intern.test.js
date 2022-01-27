const Intern = require('../lib/intern');

describe('Intern', () => {
    test.todo('getSchool returns the school of the current intern instance'), () => {

        let intern1 = new Intern("Joe", "67", "joe@gmail.com", "UC Berkeley");
        let currentSchool = intern1.getSchool();
        // Assert
        expect(currentSchool).toBe("UC Berkeley");
    }

    test.todo('getRole returns the role of the current intern instance'), () => {
        
        let intern1 = new Intern("Joe", "67", "joe@gmail.com", "UC Berkeley");
        let currentRole = intern1.getRole();
        // Assert
        expect(currentRole).toBe("Intern");
    }
})