import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Announcement } from 'src/app/models/announcement';
import { AnnounceService } from 'src/app/services/announce.service';

@Component({
	selector: 'app-announcement-details',
	templateUrl: './announcement-details.component.html',
	styleUrls: ['./announcement-details.component.scss']
})
export class AnnouncementDetailsComponent implements OnInit {
	public announcement!: Announcement;
	public announcementId!: string | null;
	public announcements: Announcement[] = [];

	constructor(
		private _announc: AnnounceService,
		private acRoute: ActivatedRoute,
	) {
	}

	ngOnInit(): void {
		setTimeout(() => {
			this.getCurrentAnnouncement();
			this.getTopThreeAnnouncements();
		}, 1000);
	}

	getCurrentAnnouncement(): void {
		this.acRoute.paramMap.subscribe((id: ParamMap) => {
			this.announcementId = id.get('id')
		});

		this._announc.getAllAnnouncements()
			.subscribe((announcements: Announcement[]) => {
				const currAnnouncement = announcements.find(announcement => announcement.id === this.announcementId)
				if (currAnnouncement) {
					this.announcement = currAnnouncement
				}
			})
	}

	getTopThreeAnnouncements(): void {
		this._announc.getAllAnnouncements()
			.subscribe((announcements: Announcement[]) => {
				let correctArray = announcements.filter((a: Announcement) => a.id !== this.announcementId);
				this.similarAnnouncements(this.announcement, correctArray)
			});
	}

	similarAnnouncements(anoncDetailed: Announcement, announcements: Announcement[]): Announcement[] {
		let anoncTitle = anoncDetailed.title?.toLowerCase().split(' ').filter((elem: string) => elem.length >= 2);
		let anoncDescr = anoncDetailed.description?.toLowerCase().split(' ').filter((elem: string) => elem.length >= 2);




		announcements.map((e) => {
			let announcementTitle = e.title?.toLowerCase().split(' ').filter((elem: string) => elem.length >= 2);
			let announcementDesc = e.description?.toLowerCase().split(' ').filter((elem: string) => elem.length >= 2);

			if (anoncTitle?.some((v) => announcementTitle?.includes(v)) &&
				anoncDescr?.some((v) => announcementDesc?.includes(v))) {

				this.announcements.push(e)
				this.announcements.sort((a, b) => Date.parse(b.timeAdded) - Date.parse(a.timeAdded))

			}
		})
		if (this.announcements.length > 3) {
			this.announcements.sort((a, b) => Date.parse(b.timeAdded) - Date.parse(a.timeAdded))
			this.announcements.length = 3;
		}

		return this.announcements
	}
}
