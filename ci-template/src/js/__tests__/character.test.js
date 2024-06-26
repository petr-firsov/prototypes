import Character from '../character.js';
import Bowman from '../bowman.js';

// Health and level
test('health and level test', () => {
	const healthLevel = new Character('12345', 'Magician');
	const correct = {
		attack: undefined,
        defence: undefined,
        health: 100,
        level: 1,
	};
	expect(healthLevel).toEqual(correct);
});

// Too short name
test('character name is too short', () => {
	const tooShortName = new Character('1', 'Magician');
	expect(tooShortName).toThrow();
});


// Too long name
test('character name is too long', () => {
	const tooLongName = new Character('1234567890123', 'Magician');
	expect(tooLongName).toThrow();
});


// False type
test('type of character is wrong', () => {
	const falseType = new Character('12345', 'FalseType');
	expect(falseType).toThrow();
});

// Damage method
test('damage mathod', () => {
    const bowman = new Bowman('name');
    bowman.damage(36);
    expect(bowman.health).toBe(73);
});

// levelUp method test
test('levelUp test', () => {
    const bowman = new Bowman('name');
    bowman.damage(67);
    bowman.levelUp();
    const correct = {
        health: 100,
        level: 2,
        attack: 30,
        defence: 30
    };
    expect(bowman).toEqual(correct);
});

test('levelUp when 0 health', () => {
    const dead = new Bowman('name');
    dead.damage(134);
    expect(dead.levelUp()).toThrow();
});
