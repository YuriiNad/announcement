//in - використовується щоб перевірити існування властивості обєкту
type Walk = { walk: boolean };
type Swim = { swim: boolean };
type Climb = { climb: boolean };

const ability: Walk | Swim | Climb = {
	walk: true,
}
function getAbiliy(data: Walk | Swim | Climb) {
	if('walk' in data) {
		console.log(data);
	} else {
		console.log("FALSE!!!");
	}
}

//delete - видаляє властивість обєкту;
interface User {
	name: string,
	age?: number,
	country: string,
}
let person: User = {
	name: 'Yurii',
	age: 28,
	country: 'UA',
}
delete person.age;

//typeof - використовують, щоб виявити тип змінних 
//--ми сожем витягнути типи з потрібних нам обєктів
const user = {
	id: '1',
	name: 'Yurii',
	address: {
		street: 'test-street',
		country: 'UA',
	},
	contact: [
		{
			phone: '#1',
			phoneNumber: '123456789',
			ZIP: '123456',
		}
	]
}

type AddressInfo = typeof user['address'];
type ContactInfo = typeof user.contact[number];

const address: AddressInfo = {
	street: 'Nova',
	country: 'UA',
};
const contact: ContactInfo = {
	phone: '22',
	phoneNumber: '33',
	ZIP: '112',
}

//keyof - використовується, щоб дістати ключі з типу обєкту.
type Person = {
	firstName: string;
	secondName: string;
	age: number;
	location: string;
}
const person_1: Person = {
	firstName: 'Yurii',
	secondName: 'Nadilniy',
	age: 28,
	location: 'UA',
}

type PersonDataType = keyof Person;

function get<T, K extends keyof T>(obj: T, prop: K ): T[K] | undefined {
	return obj[prop];
}

export function typeOperatorsLogger(): void {
	const result = get(person_1, 'age');
	console.log(result);
	
}