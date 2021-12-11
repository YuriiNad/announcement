import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Announcement } from 'src/app/models/announcement';
import { AnnounceService } from 'src/app/services/announce.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
	selector: 'app-announcement',
	templateUrl: './announcement.component.html',
	styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit, DoCheck {
	public announcements: Announcement[] = [];
	public searchAnnounce = '';
	public toLoadMore = true;

	constructor(
		private _announc: AnnounceService,
		private router: Router,
		private _share: SharedService,
	) {

	}

	ngOnInit(): void {
		setTimeout(() => {
			this.getAllAnnouncements()
		}, 1000);
	}

	editAnnouncement(annId: string): void {
		this.router.navigate(['/edit-announcement', annId])
	}

	getAllAnnouncements(): void {
		this._announc.getAllAnnouncements()
			.subscribe((announcements: Announcement[]) => {
				this.announcements = announcements

				if (this.toLoadMore && this.announcements.length >= 4 && !this.searchAnnounce) {
					this.announcements = announcements
					this.announcements.length = 4;
				} else {
					this.announcements = announcements;
				}
			});
	}

	removeAnnouncement(announcement: Announcement): void {
		this._announc.removeAnnouncement(announcement)
			.subscribe(() => {
				this.announcements = this.announcements.filter((a: Announcement) => a.id !== announcement.id)
			}, (error: any) => {
				console.error(error);
			})

		setTimeout(() => {
			this.getAllAnnouncements()
		}, 100);
	}

	seeAnnouncementsList(): void {
		this.toLoadMore = !this.toLoadMore;
		this.getAllAnnouncements();
	}

	ngDoCheck() {
		this._share.announcement.subscribe((searchAnnounce: string) => this.searchAnnounce = searchAnnounce)
	}

}
