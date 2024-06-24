import {Bowman} from '../bowman';

let bowman = new Bowman('name');
bowman.damage(36);
test('damage test', () => {
    expect(bowman.health).toBe(73);
});

