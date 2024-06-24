import { Character } from '../character.js';

const tooShortName = new Character('1', 'Magician');

test('character name is too short', () => {
	expect(tooShortName).toThrow();
});