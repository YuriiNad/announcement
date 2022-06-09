//Будівельник дає змогу створювати складні об'єкти крок за кроком з полями які потрібні нам
interface Person {
	name: string;
	age: number;
	salary?: number;
	nickName?: string;
	phone?: number;
	country?: string
}
interface Builder {
	setSalary(salary: number): UserBuilder;
	setNickName(nickName: string): UserBuilder;
	setPhone(phone: number): UserBuilder;
	setCountry(country: string): UserBuilder;
	build(): User;
}

class User implements Person {
	name: string;
	age: number;
	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}
}

export class UserBuilder implements Builder{
	user: Person;
	
	constructor(name: string, age: number) {
		this.user = new User(name, age)
	}

	setSalary(salary: number):UserBuilder {
		this.user.salary = salary;
		return this;
	}

	setNickName(nickName: string):UserBuilder {
		this.user.nickName = nickName;
		return this;
	}

	setPhone(phone: number):UserBuilder {
		this.user.phone = phone;
		return this;
	}

	setCountry(country: string):UserBuilder {
		this.user.country = country;
		return this;
	}

	build(): User {
		return this.user;
	}
}