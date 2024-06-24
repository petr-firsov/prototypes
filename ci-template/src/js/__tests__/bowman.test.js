import {Bowman} from '../bowman.js';

let bowman = new Bowman('name');

test('bowman attack', () => {
    expect(bowman.attack).toBe(25);
});

test('bowman defence', () => {
    expect(bowman.defence).toBe(25);
})