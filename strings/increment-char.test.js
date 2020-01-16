const increment = require('./increment-char');

describe('the increment char function', () => {
    it('should return a string', () => {
        expect(typeof increment('s')).toEqual('string');
    });

    it('should return a the next character in the alphabet', () => {
        expect(increment('d')).toEqual('e');
    });

    it('should return `a` when the argument passed is `z` (cyclic increment)', () => {
        expect(increment('z')).toEqual('a');
    });
});