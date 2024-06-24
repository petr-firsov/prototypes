import { Character } from '../character.js';

const falseType = new Character('12345', 'FalseType');

test('type of character is wrong', () => {
	expect(falseType).toThrow();
});
