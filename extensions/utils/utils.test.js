const sayhi = require('./utils');

describe('success sayHi', () => {
    test('success', () => {
        expect(sayhi()).toBe('👋');
    });
    it('fail',()=>{
        expect(sayhi()).not.toBe('')
    })
});


