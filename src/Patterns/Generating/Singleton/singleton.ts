//Singleton - це породжувальний патерн проектування, який гарантує, що клас має лише один екземпляр, та надає глобальну точку доступу до нього.
export class Singleton {
	private static instance: Singleton;
	private constructor() {}

	static getInstance(): Singleton {
		 if(!Singleton.instance) {
			return Singleton.instance = new Singleton();
		}
		return this.instance;
	}
}