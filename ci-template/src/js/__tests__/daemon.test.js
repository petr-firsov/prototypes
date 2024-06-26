import Daemon from '../daemon.js';

test('daemon class test', () => {
    const daemon = new Daemon('Daemon');
    const correct = {
        attack: 10,
        defence: 40,
        health: 100,
        level: 1
    };
    expect(daemon).toEqual(correct);
});