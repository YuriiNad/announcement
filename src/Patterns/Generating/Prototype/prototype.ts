function Auto(this: any, brand: string, price: number, gas: number) {
	this.brand = brand;
	this.price = price;
	this.gas = gas;

}

Auto.prototype.drive = function() {
	if(this.gas > 0) {
		this.gas = this.gas - 20;
		return this.gas
	}
}

interface Prototype { // all classes that will be able to be cloned should implement this interface
	clone(): this; 
}

class Car implements Prototype {
	private color: string;
	private model: string;

	constructor(color: string, model: string) {
		this.color = color;
		this.model = model;
	}

	clone(): this {
		const clone = new Car(this.color, this.model)
		return this;
	}
}

const Bmw = new Car('red', 'BMW')
const Bmw_clone = Bmw.clone()
export function prototypeLogger() {
	console.log(Bmw);
	console.log(Bmw_clone);
}