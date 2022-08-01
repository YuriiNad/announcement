//Adapter - using to cpmbine two interfaces with diferent structure;
class USASocket {
	plugInUSA(): void {
		console.log('USA socket is plugged in - is charging now');
	}
}

class EUSocket {
	plugInEU(): void {
		console.log('EU socket is plugged in - is charging now');
	}
}

class USASocketAdapter {
	sourse: USASocket;
	constructor(sourse: USASocket) {
		this.sourse = sourse
	}

	plugInEU(): void {
		this.sourse.plugInUSA();
	}

}
class PhoneEU {
	socket: EUSocket
	constructor(socket: EUSocket) {
		this.socket = socket;
	}

	charge(): void {
		this.socket.plugInEU();
	}
}

export function adapterLogger() {
	const euSocket = new EUSocket();

	const usaSocket = new USASocket();
	const usaAdapterSocket = new USASocketAdapter(usaSocket);

	const myPhone = new PhoneEU(euSocket);
	const myPhoneWithAdapter = new PhoneEU(usaAdapterSocket);
	
	myPhone.charge();
	myPhoneWithAdapter.charge();
}