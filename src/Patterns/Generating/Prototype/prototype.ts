//Прототип - це породжувальний патерн проектування, що дає змогу копіювати об’єкти, не вдаючись у подробиці їхньої реалізації.
interface CarSkeleton {
	model: string;
	color: string;
	price: number;
	autopilot: boolean;
}

export class Car implements CarSkeleton {
	model: string;
	color: string;
	price: number;
	autopilot: boolean;

	constructor(model: string, color: string, price: number, autopilot: boolean) {
		this.model = model;
		this.color = color;
		this.price = price;
		this.autopilot = autopilot;
	}

	getPrototype():CarSkeleton {
		return new Car(this.model, this.color, this.price, this.autopilot)
	}
}