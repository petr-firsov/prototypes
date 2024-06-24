import {Character} from '../character.js';
import {Daemon} from '../daemon.js';

let daemon = new Daemon('name');

test('daemon attack', () => {
    expect(daemon.attack).toBe(10);
});

test('daemon defence', () => {
    expect(daemon.defence).toBe(40);
})