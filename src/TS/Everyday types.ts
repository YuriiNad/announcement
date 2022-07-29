//------The primitives - consists of : number | string | boolean;

//------Arrays - represents specific type as an array 
const arr: number[] =[1,2,3]; // Type[]
const arr_1: Array<number> = [1,2,3]; // Array<Type>

//------any - basically this type turn off type checking and can be cause of an error in feature;
// When you do not specify a type of element TS automaticlly sets it as "any" type by default

//------Type Annotations on Variables - When we declare variable using "var, let, const" we can specify the specific type of data that will be put in.
var variable_1: number = 2;
let variable_2: string = '2';
const variable_3: false = false;
//by default Ts infers automatically refers to value of variable and defines type from it;
let variable_4 = 'My name' // Ts knows that the type is "string";

//------Object Types - basically it's a just an object with its props that have specific type;
// We can simply replace it with interface if need
let obj: { name: string; age: number } = {
	name: 'Yurii',
	age: 28,
}

//----Union Types - specify possibly few types for value;
const unionType: string | number = 22;

function unionFunc(value: string | number) {
	if (typeof value === 'string') {
		return value.toUpperCase();
	}
	return value;
}

//------Type Assertions - (твердження)
//"As" tells the compiler to consider the elementas another type than the type the compiler infers the object to be
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas_1 = <HTMLCanvasElement>document.getElementById("main_canvas");

//-----Literal Types (буквальний тип)
let one: 22 = 22;
// one = 44 // - an error (cuz we specified type above)


//---- as const - to read only (it doesn't allow us to change member of an array cuz we spefifed it as read only with "const")
//without "const" keyword - we can assign any value (type string) to array;
const arr_2 = [
	'Ihor',
	'Yurii',
	'Taras',
	'Vasil',
] 
export function loggerEverydayTypes(): void {
	console.log(arr_2);
}


