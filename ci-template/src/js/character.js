export default class Character {
	constructor(name, type) {
		if (!(typeof name === 'string') || name.length < 2 || name.length > 10) {
			throw new Error('Имя должно содержать от 2 до 10 символов');
		} else {
			this.name = name;
		}
		const characterTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
		if (!characterTypes.includes(type)) {
			throw new Error('Неизвестное существо');
		} else {
			this.type = type;
		}
		this.health = 100;
		this.level = 1;
		this.attack = undefined;
		this.defence = undefined;
	}
	levelUp() {
		if (this.health <= 0) {
			throw new Error('Повысить уровень нельзя!')
		}
		this.level = this.level + 1;
		this.attack = this.attack * 1.2;
		this.defence = this.defence * 1.2;
		this.health = 100;
	}
	damage(points) {
		if (this.health >= 0) {
			this.health -= points * (1 - this.defence / 100);
		}
	}
}