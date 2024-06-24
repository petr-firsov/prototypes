import {Character} from './character.js';
export class Bowman extends Character {
	constructor(name, type = 'Bowman') {
		super(name, type);
		this.attack = 25;
		this.defence = 25;
	}
}