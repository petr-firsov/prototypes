import {Bowman} from '../bowman';

let destroyed = new Bowman('name');
destroyed.damage(134);
destroyed.levelUp();
test('dead character levelUp', () => {
    expect(destroyed.health).toThrow();
})
