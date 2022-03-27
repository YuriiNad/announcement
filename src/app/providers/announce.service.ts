import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CreateResponse } from '../models/response';



@Injectable({
	providedIn: 'root'
})
export class AnnounceService {
	private url = 'https://announcement-task-default-rtdb.europe-west1.firebasedatabase.app/api/'
	constructor(
		private _http: HttpClient
	) {

	}

	getAllAnnouncements(): Observable<any[]> {
		return this._http
			// .get<Announcement[]>(`/api/announcements.json`)  // to avoid CORS issue
			.get<any[]>(`${this.url}/announcements.json`)
			.pipe(
				map(announcement => {
					if (!announcement) {
						return announcement = []
					} else {
						return Object.keys(announcement).map((key: any) => ({ ...announcement[key], id: key }))
					}
				})
			)
	}

	addNewAnnouncement(announcement: any): Observable<any> {
		console.log(1);
		
		return this._http
			// .post<CreateResponse>(`${this.url}/announcements.json`, announcement)
			.post<CreateResponse>(`/api/announcements.json`, announcement)  // to avoid CORS issue
			.pipe(
				map((res) => {
					console.log(res);
					
					return { ...announcement, id: res.name }
				})
			)
	}

	removeAnnouncement(announcement: any): Observable<void> {
		return this._http
			.delete<void>(`${this.url}/announcements/${announcement.id}.json`)
		// .delete<void>(`/api/announcements/${announcement.id}.json`)
	}

	editAnnouncement(id: string | null, data: any): Observable<any> {
		return this._http.put<any>(`${this.url}/announcements/${id}.json`, data)
		// return this._http.put<Announcement>(`/api/announcements/${id}.json`, data) // to avoid CORS issue
	}

	getTimeStamp() {
		const now = new Date();
		const date = now.getUTCFullYear() + '/' +
			(now.getUTCMonth() + 1) + '/' +
			now.getUTCDate();
		const time = now.getHours() + ':' +
			now.getUTCMinutes() + ':' +
			now.getUTCSeconds();
		return (date + ' ' + time);
	}
}
