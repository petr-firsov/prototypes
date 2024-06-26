import Undead from '../undead.js';

test('undead class test', () => {
    const undead = new Undead('Undead');
    const correct = {
        name: 'Undead',
        type: 'Undead',
        attack: 25,
        defence: 25,
        health: 100,
        level: 1
    };
    expect(undead).toEqual(correct);
});