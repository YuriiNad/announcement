import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/Patterns/Generating/Factory method/factory-method';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'Announcement';

	ngOnInit(): void {
		//-- Fabric
		const earth = Planet.create();
		console.log(earth);
	}
}
