import Bowman from '../bowman.js';

test('bowman class test', () => {
    const bowman = new Bowman('Bowman');
    const correct = {
        name: 'Bowman',
        type: 'Bowman',
        attack: 25,
        defence: 25,
        health: 100,
        level: 1
    };
    expect(bowman).toEqual(correct);
});
