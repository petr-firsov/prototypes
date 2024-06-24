import { Character } from '../character.js';

const tooLongName = new Character('1234567890123', 'Magician');

test('character name is too long', () => {
	expect(tooLongName).toThrow();
});