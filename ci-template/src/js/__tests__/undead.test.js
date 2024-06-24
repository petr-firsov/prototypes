import {Character} from '../character.js';
import {Undead} from '../undead.js';

let undead = new Undead('name');

test('undead attack', () => {
    expect(undead.attack).toBe(25);
});

test('undead defence', () => {
    expect(undead.defence).toBe(25);
})