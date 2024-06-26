import Magician from '../magician.js';

test('magician class test', () => {
    const magician = new Magician('Magician');
    const correct = {
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
    };
    expect(magician).toEqual(correct);
});