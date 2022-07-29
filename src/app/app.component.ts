import { Component, OnInit } from '@angular/core';
import { bindLogger } from 'src/Context/bind';
import { AbsConstructor, MacFactory, WinFactory } from 'src/Patterns/Generating/Abstract Factory/abstract-factory';
import { UserBuilder } from 'src/Patterns/Generating/Builder/builder';
import { Planet } from 'src/Patterns/Generating/Factory method/factory-method';
import { Car } from 'src/Patterns/Generating/Prototype/prototype';
import { Singleton } from 'src/Patterns/Generating/Singleton/singleton';
import { loggerEverydayTypes } from 'src/TS/Everyday types';
import { typeOperatorsLogger } from 'src/TS/Type-Operators';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Announcement';

	ngOnInit(): void {
		//-- Factory
		const earth = Planet.create();

		//-- Abstract Factory
		const macFabc = new MacFactory();
		const macElements = new AbsConstructor(macFabc);

		//-- Builder
		const user = new UserBuilder('Yurii', 27)
			.setCountry('UA')
			.setPhone(67273907539475)
			.setSalary(10000)
			.build();

		//-- Prototype
		const tesla = new Car('Tesla', 'gray', 20000, true)
		const teslaXL = tesla.getPrototype();
		teslaXL.model = 'teslaXL'
		teslaXL.color = 'red'
		teslaXL.price = 50000;
		//--Singleton
		const V1 = Singleton.getInstance();
		const V2 = Singleton.getInstance();
		
		//--Context
		bindLogger();
		//--Everyday-Types
		loggerEverydayTypes();
	}
}
