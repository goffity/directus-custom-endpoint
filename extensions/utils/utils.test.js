const format = require('./utils');

describe('success', () => {
    test('success', () => {
        expect(format(6000)).toBe('01:40:00');
    });
});


