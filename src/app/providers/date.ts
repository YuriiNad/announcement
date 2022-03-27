import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getTimeStamp(): string {
		const now = new Date();
		const date = now.getUTCFullYear() + '/' +
			(now.getUTCMonth() + 1) + '/' +
			now.getUTCDate();
		const time = now.getHours() + ':' +
			now.getUTCMinutes() + ':' + now.getSeconds();
      
		return (date + ' ' + time);
  }
}
