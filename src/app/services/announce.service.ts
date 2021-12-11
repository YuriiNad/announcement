import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { map } from 'rxjs/operators';
import { Announcement } from '../models/announcement';
import { HttpClient } from '@angular/common/http';
import { CreateResponse } from '../models/response';



@Injectable({
	providedIn: 'root'
})
export class AnnounceService {
	constructor(
		private _http: HttpClient
	) {

	}

	getAllAnnouncements(): Observable<Announcement[]> {
		return this._http
			.get<Announcement[]>(`/api/announcements.json`)
			.pipe(
				map(announcement => {
					// console.log(announcement);
					if (!announcement) {
						return announcement = []
					} else {
						return Object.keys(announcement).map((key: any) => ({ ...announcement[key], id: key }))
					}
				})
			)
	}


	addNewAnnouncement(announcement: Announcement): Observable<Announcement> {
		return this._http
			.post<CreateResponse>(`/api/announcements.json`, announcement)
			.pipe(
				map((res) => {
					return { ...announcement, id: res.name }
				})
			)
	}

	removeAnnouncement(announcement: Announcement): Observable<void> {
		return this._http
			.delete<void>(`/api/announcements/${announcement.id}.json`)
	}

	editAnnouncement(id: string | null, data: Announcement): Observable<Announcement> {
		return this._http.put<Announcement>(`/api/announcements/${id}.json`, data)
	}

	getTimeStamp() {
		const now = new Date();
		const date = now.getUTCFullYear() + '/' +
			(now.getUTCMonth() + 1) + '/' +
			now.getUTCDate();
		const time = now.getHours() + ':' +
			now.getUTCMinutes()
		return (date + ' ' + time);
	}
}
