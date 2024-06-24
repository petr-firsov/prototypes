import {Character} from '../character.js';
import {Zombie} from '../zombie.js';

let zombie = new Zombie('name');

test('zombie attack', () => {
    expect(zombie.attack).toBe(40);
});

test('zombie defence', () => {
    expect(zombie.defence).toBe(10);
})