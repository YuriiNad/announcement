//--generics - використовують, щоб створювати реюзабельні компоненти.
//Якщо нам потрібно вказати якось конкретний тип для дженеріка то ми можемо використати
// 'extends' - <K extends string | number>
class User <T, K extends number> {
	name: T;
	age: K;

	constructor( name: T, age: K) {
		this.name = name;
		this.age = age;
	}

	get info(): string {
	 return `${this.name}, ${this.age}`
	}

	get userAge(): number {
		return this.age**2;
	} 
}

interface Info {
	name: string,
	age: number,
	surname: string,
	country: string,
	id: number,	
}

const userInfo: Info = {
	name: 'Yurii',
	age: 28,
	surname: 'Nadilnyi',
	country: 'UA',
	id: 123456789,
}

function userField<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}

const result = userField(userInfo, 'name'); 
export function generics(): any { 
	return result;
}