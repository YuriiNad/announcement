abstract class First {
 public field01 = 'first';
 abstract getInfo(): void;
}

abstract class Second extends First{
	public field02 = this.field01 + ' SECOND';

}

class Field extends Second {

	constructor() {
		super()
	}

	getInfo(): void {
		// console.log(this.field02);
		console.log(this.field01);
	}
}
const result = new Field();

export function loggerAbstract(): void {
	result.getInfo();
}