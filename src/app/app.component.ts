import { Component, OnInit } from '@angular/core';
import { AbsConstructor, MacFactory, WinFactory } from 'src/Patterns/Generating/Abstract Factory/abstract-factory';
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
		const macElements = new AbsConstructor(macFabc)
	}
}
