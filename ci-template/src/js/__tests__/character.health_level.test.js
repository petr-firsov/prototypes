import { Character } from '../character.js';

const healthLevel = new Character('12345', 'Magician');

test('health value', () => {
	expect(healthLevel.health).toBe(100);
});

test('level value', () => {
	expect(healthLevel.level).toBe(1);
});
