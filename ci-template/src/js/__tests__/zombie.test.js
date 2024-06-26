import Zombie from '../zombie.js';

test('zombie class test', () => {
    const zombie = new Zombie('Zombie');
    const correct = {
        name: 'Zombie',
        type: 'Zombie',
        attack: 40,
        defence: 10,
        health: 100,
        level: 1
    };
    expect(zombie).toEqual(correct);
});