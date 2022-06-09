import { Component, OnInit } from '@angular/core';
import { AbsConstructor, MacFactory, WinFactory } from 'src/Patterns/Generating/Abstract Factory/abstract-factory';
import { UserBuilder } from 'src/Patterns/Generating/Builder/builder';
import { Planet } from 'src/Patterns/Generating/Factory method/factory-method';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Announcement';

	ngOnInit(): void {
		//-- Abstract Factory
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

			
	}
}
