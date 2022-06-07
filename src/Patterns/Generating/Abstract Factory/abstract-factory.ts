//Abstract Factory - інтерфейс який групує інші фабрики які логічно повязані одна з одною. Коли потрібно додати шар абстракції над фабрикою
//--Використовуємо коли програма повинна працювати з різними видами повязаних класів (продуктів)
interface Button {
	readonly name: string;
	btnInfo(): string;
}
interface CheckBox {
	readonly name: string;
	boxInfo(): string;
}

interface GUIFactory  {
	getButton(): Button;
	getCheckbox(): CheckBox;
}

//Win elements
class WinButton implements Button {
	readonly name = 'Windows button';
	btnInfo(): string {
		return `I\'m ${this.name} element`
	}
}

class WinCheckBox implements CheckBox {
	readonly name = 'Windows checkbox';
	boxInfo(): string {
		return `I\'m ${this.name} element`
	}
}

//WinFactory
export class WinFactory implements GUIFactory{
	getButton(): Button {
		return new WinButton()
	}

	getCheckbox(): CheckBox {
		return new WinCheckBox()
	}
}

//Mac elements
class MacButton implements Button {
	readonly name = 'Mac button';
	btnInfo(): string {
		return `I\'m ${this.name} element`
	}
}

class MacCheckBox implements CheckBox {
	readonly name = 'Mac checkbox';
	boxInfo(): string {
		return `I\'m ${this.name} element`
	}
}

//MacFactory
export class MacFactory implements GUIFactory {
	getButton(): Button {
		return new MacButton()
	}

	getCheckbox(): CheckBox {
		return new MacCheckBox()
	}
}

export class AbsConstructor {
	private currFactory!: GUIFactory;
	private buttonDescr!: string;
	private checkboxDescr!: string;

	constructor(factory: GUIFactory) {
		this.currFactory = factory;
	}
	getButtonDescr(): string {
		return	this.buttonDescr = this.currFactory.getButton().btnInfo();
	}

	getCheckboxDescr(): string {
		return this.checkboxDescr = this.currFactory.getCheckbox().boxInfo();
	}

}