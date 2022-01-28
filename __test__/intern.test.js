const Intern = require('../lib/intern');

describe('Intern', () => {
    it('getName returns the name of the current intern instace', () => {

        let intern1 = new Intern("Joe", "67", "joe@gmail.com", "UC Berkeley");
        let currentName = intern1.getName();
        // Assert
        expect(currentName).toBe("Joe");
    });

    it('getId returns the Id of the current intern instance', () => {

        let intern1 = new Intern("Joe", "67", "joe@gmail.com", "UC Berkeley");
        let currentId = intern1.getId();
        // Assert
        expect(currentId).toBe("67");
    });

    it('getEmail returns the email of the current intern instance', () => {

        let intern1 = new Intern("Joe", "67", "joe@gmail.com", "UC Berkeley");
        let currentEmail = intern1.getEmail();
        // Assert
        expect(currentEmail).toBe("joe@gmail.com");
    });

    it('getSchool returns the school of the current intern instance', () => {

        let intern1 = new Intern("Joe", "67", "joe@gmail.com", "UC Berkeley");
        let currentSchool = intern1.getSchool();
        // Assert
        expect(currentSchool).toBe("UC Berkeley");
    });

    it('getRole returns the role of the current intern instance', () => {
        
        let intern1 = new Intern("Joe", "67", "joe@gmail.com", "UC Berkeley");
        let currentRole = intern1.getRole();
        // Assert
        expect(currentRole).toBe("Intern");
    });
})