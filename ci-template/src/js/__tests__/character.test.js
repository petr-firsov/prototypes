// Тест родительского класса

import { Character } from '../character.js';
import { characterTypes } from '../character.js';

test('character name length', () => {
	let a = new Character('');
	expect(a).toThrow(Error);
});

test('character type errors', () => {
	let a = new Character('ok', 'asdf');
	expect(a).toThrow(Error);
});

test('health value', () => {
	expect(new Character).toBe(100);
});

test('level value', () => {
	expect(hero.level).toBe(1);
});


// Тест дочерних классов

import {Bowman} from '../character.js';
import {Swordsman} from '../character.js';
import {Magician} from '../character.js';
import {Undead} from '../character.js';
import {Zombie} from '../character.js';
import {Daemon} from '../character.js';

let bowman = new Bowman('one', 'Bowman');
let swordsman = new Swordsman('two', 'Swordsman');
let magician = new Magician('three', 'Magician');
let undead = new Undead('four', 'Undead');
let zombie = new Zombie('five', 'Zombie');
let daemon = new Daemon('six', 'Daemon');

let heroes = [
	[bowman, 25, 25],
	[swordsman, 40, 10],
	[magician, 10, 40],
	[undead, 25, 25],
	[zombie, 40, 10],
	[daemon, 10, 20]
]

test.each(heroes)('heroes attack value', (hero, attack, defence) => {
	expect(hero.attack).toBe(attack);
});

test.each(heroes)('heroes defence value', (hero, attack, defence) => {
	expect(hero.defence).toBe(defence);
});



// Тест метода levelUp

let upgradedHero = new Bowman('levelUp');
upgradedHero.levelUp();

test('levelUp level value', () => {
	expect(upgradedHero.level).toBe(2);
});

test('levelUp attack value', () => {
	expect(upgradedHero.attack).toBe(30);
});

test('levelUp defence value', () => {
	expect(upgradedHero.defence).toBe(30);
});

test('levelUp health value', () => {
	expect(upgradedHero.health).toBe(100);
});


// Тест метода damage

let damagedHero = new Swordsman('damage');
damagedHero.damage(10);

test('Character method damage', () => {
	expect(damagedHero.health).toBe(91);
});


