const { TestWatcher } = require('@jest/core');
const poUpName = require('../userindex.js');

describe('User details in pop up', () => {
    test('Should do nothing if first name of person equals first name of pop-up', () => {
        const { fName } = popUpName.displayUsers('Russell');

        expect(fName).toEqual('Russell');
        
    })
})