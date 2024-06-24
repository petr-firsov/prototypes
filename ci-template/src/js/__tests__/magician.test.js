// import {Character} from '../character.js';
import {Magician} from '../magician.js';

let magician = new Magician('name');

test('magician attack', () => {
    expect(magician.attack).toBe(10);
});

test('magician defence', () => {
    expect(magician.defence).toBe(40);
})