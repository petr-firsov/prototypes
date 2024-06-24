import {Character} from '../character.js';
import {Swordsman} from '../swordsman.js';

let swordsman = new Swordsman('name');

test('swordsman attack', () => {
    expect(swordsman.attack).toBe(40);
});

test('swordsman defence', () => {
    expect(swordsman.defence).toBe(10);
})