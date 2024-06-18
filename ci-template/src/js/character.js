export let characterTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export class Character {
	constructor(name, type, attack, defence) {
		if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
			this.name = name;
		} else {
			throw new Error();
		}
		if (characterTypes.includes(type)) {
			this.type = type;
		} else {
			throw new Error();
		}
		this.health = 100;
		this.level = 1;
		this.attack = attack;
		this.defence = defence;
	}
	levelUp() {
		this.level = this.level++;
		this.attack = this.attack * 1,2;
		this.defence = this.defence * 1,2;
		this.health = 100;
	}
	damage(points) {
		if (health >= 0) {
			this.health -= points * (1 - defence / 100);
		}
	}
}


export class Bowman extends Character {
	constructor(name, type, health, level, attack, defence) {
		super(name, type, health, level, attack, defence);
		this.type = 'Bowman';
		this.attack = 25;
		this.defence = 25;
	}
}

export class Swordsman extends Character {
	constructor(name, type, health, level, attack, defence) {
		super(name, type, health, level, attack, defence);
		this.type = 'Swordsman';
		this.attack = 40;
		this.defence = 10;
	}
}

export class Magician extends Character {
	constructor(name, type, health, level, attack, defence) {
		super(name, type, health, level);
		this.type = 'Magician';
		this.attack = 10;
		this.defence = 40;
	}
}

export class Undead extends Character {
	constructor(name, type, health, level, attack, defence) {
		super(name, type, health, level);
		this.type = 'Undead';
		this.attack = 25;
		this.defence = 25;
	}
}

export class Zombie extends Character {
	constructor(name, type, health, level, attack, defence) {
		super(name, type, health, level);
		this.type = 'Zombie';
		this.attack = 40;
		this.defence = 10;
	}
}

export class Daemon extends Character {
	constructor(name, type, health, level, attack, defence) {
		super(name, type, health, level);
		this.level = 'Daemon';
		this.attack = 10;
		this.defence = 40;
	}
}