//Narrowing - це ніби більш точне приведення до типу.
//Сетати дефолтні значення для опшинал параметрів для того щоб прога не впала
//__deep type definding;
function getWidth(width?: number | string ): string {
	if(typeof width === 'number') {
		return `${width}px`;
	}

	return width || '100px';
}
const  result_narow  = getWidth();

//__type guards - допомагає визначити TS більш конкретні типи
//-----typeof  - визначає тип елемента; (undefined-object-boolean-number-bigint-string-symbol-function);

//-----instanceof - перевіряє чи значення є екземпляром певного класу;
class UserNarrowing {
	name: string;
	age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}
const yurii = new UserNarrowing('Yurii', 28);
function instOfCheck(data?: number | Array<number> | any): number {
	if(data instanceof Array) {
		const result = data.reduce((first: number, last: number) => {
			return first + last;
		},0);

		return result
	}

	return data || 0;
}
export function narrowingLogger(): any {

	console.log(instOfCheck(256));
	console.log(instOfCheck([10, 20, 50, 20]));
	
	return result_narow;
}