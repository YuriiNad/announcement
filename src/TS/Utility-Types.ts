
//--Partial<Type>  - створює тип з всіма властивостями Типу які є не обовязкові 
interface Person {
	name: string;
	age: number;
}
const person1: Person = {
	name: 'Yurii',
	age: 27,
} 
const person2: Partial<Person> = { // заставляє поля бути НЕ обов'язковими;
	name:'Ihor',
	age: 26,
}

//--Required<Type> - створює ти властивості якого є обов'язковими
interface Car {
	color?: string;
	price?: number
}
const bmw: Car = {
	color: 'red'
}
const vaz: Required<Car> = { // заставляє поля бути обовязковими;
	color: 'blue',
	price: 3000
}

//Readonly<Type> - створює тип з усіма властивостями які є тільки для читпння і не можуть буди переасайнені
interface ReadOnly {
	title: string | number,
}

const title: ReadOnly = {
	title: 'one'
}
const title1: Readonly<ReadOnly> = { // can't change the properti once;
	title: 'two'
}

//--Record<Keys, Type> - створює обєкт властивості якого ключі (Types) а значення (Type)
//Це можна використовувати щоб змапити властивості одного типу з іншим
type UserType = "junior" | "midle" | "senior"

const people: Record<UserType, Person> = {
	junior: {name:'yurii', age: 27},
	midle: {name:'ihor', age: 26},
	senior: {name:'michael', age: 26},
}

//Pick<Type, Keys> - створює тип вибираючи набір властивостей (Keys) з (Type)
interface Person_2 {
	name?: string;
	age?: number;
	country?: string;
}

type JustPerson = Required<Pick<Person_2, 'name' | 'country'>> // age | country;
const person_1: JustPerson = {
	name: 'Yurii',
	country: 'UA'
}

//Omit<Type, Keys> - створює тип вибираючи з Type а тоді видаляючи Keys;
type JustPerson2 = Omit<Person_2, 'age'>
const peson_2: JustPerson2 = {
	name: 'Yurii',
	country: 'UA',
}

// Logger
export function loggerUtilities(): void {

}