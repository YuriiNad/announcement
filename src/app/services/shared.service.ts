import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class SharedService {
	private currAnnouncement = new BehaviorSubject<string>('');

	constructor() { }
	announcement = this.currAnnouncement.asObservable();

	setAnnouncement(searcAnnouncement: string) {
		this.currAnnouncement.next(searcAnnouncement)
	}

}


