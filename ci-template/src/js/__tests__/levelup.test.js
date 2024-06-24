import {Bowman} from '../bowman';

let bowman = new Bowman('name');
bowman.damage(67);
bowman.levelUp();
test('level value', () => {
    expect(bowman.level).toBe(2);
});

test('attack value', () => {
    expect(bowman.attack).toBe(30);
});

test('defence value', () => {
    expect(bowman.defence).toBe(30);
});

test('health restored', () => {
    expect(bowman.health).toBe(100);
})

