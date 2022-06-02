//fabric pattern
interface PlanetStructure {
	name: string,
	diameter: number,
	distance: number,
}

class Earth implements PlanetStructure {
	name = 'Earth';
	diameter = 10;
	distance = 90100;
}

class Mars implements PlanetStructure {
	name = 'Mars';
	diameter = 120;
	distance = 21100;
}

class Jupiter implements PlanetStructure {
	name = 'Jupiter';
	diameter = 430;
	distance = 54100;
}

class Saturn implements PlanetStructure {
	name = 'Saturn';
	diameter = 55;
	distance = 8890;
}

export class Planet {
	create(name?: string): PlanetStructure {
		switch(name) {
			case 'Mars': return new Mars();
			case 'Jupiter': return new Jupiter();
			case 'Saturn': return new Saturn();
			default: return new Earth();
		}
	}
}