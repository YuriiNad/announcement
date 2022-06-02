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
		const planetFactory = new Planet();
		const earth = planetFactory.create();
		const mars = planetFactory.create('Mars');
		const jupiter = planetFactory.create('Jupiter');
		const saturn = planetFactory.create('Saturn');
		console.log(earth);
		console.log(mars);
		console.log(jupiter);
		console.log(saturn);

	}
}
