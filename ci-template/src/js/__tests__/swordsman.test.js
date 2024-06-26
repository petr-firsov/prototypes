import Swordsman from '../swordsman.js';

test('swordsman class test', () => {
    const swordsman = new Swordsman('Swordsman');
    const correct = {
        name: 'Swordsman',
        type: 'Swordsman',
        attack: 40,
        defence: 10,
        health: 100,
        level: 1
    };
    expect(swordsman).toEqual(correct);
});