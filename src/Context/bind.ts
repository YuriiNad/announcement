//Bind - повертає нову ф-цію з новим вже значенням для This яке є передане як аргумент і викликається в його контексті;
let bind_user_1 = {
	name: 'Yurii',
	age: 28,
	info: function() {
		console.log(`I'm ${this.name}, my age is ${this.age}`)
	},
}

let bind_user_2 = {
	name: 'Ihor',
	age: 53,
	bindUser: function(country: string) {
		console.log(`Hey ${this.name}, how are you?; Country: ${country}`);
	},
}


//Apply - метод який є подібним до Bind тільки він одразу викликає ф-цію, і приймає аргументи в якості масиву;
let apply_user_3 = {
	role: 'Student',
	salary: 2000,
	appyInfo: function(name: string, homeTown: string) {
		console.log(`My role - ${this.role}, my salary - ${this.salary}, my name - ${name}, my home town - ${homeTown}`);
	}
}

let apply_user_4 = {
	role: 'Doctor',
	salary: 6000,
}

//Call - метод який є повн8істю ідентичним до Apply окірм того що на відміну від Appy він приймає список аргументів а не масив

export function bindLogger() {
	//Bind

	// bind_user_1.info();
	// const Ihor = bind_user_1.info.bind(bind_user_2)
	// Ihor();
	// bind_user_2.bindUser('Peru');
	// const Yurii = bind_user_2.bindUser.bind(bind_user_1);
	// Yurii('Ukraine')

	//Apply
	// apply_user_3.appyInfo('Yurii', 'Reklinets');
	// apply_user_3.appyInfo.apply(apply_user_4, ['Michael', 'Odessa']);

	//Call
	// apply_user_3.appyInfo.call(apply_user_4, 'Ihor', 'Ugniv');
}