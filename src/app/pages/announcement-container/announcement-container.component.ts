import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Announcement } from 'src/app/models/announcement';
import { AnnounceService } from 'src/app/services/announce.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
	selector: 'app-announcement-container',
	templateUrl: './announcement-container.component.html',
	styleUrls: ['./announcement-container.component.scss']
})
export class AnnouncementContainerComponent implements OnInit {
	public announcements: any = [];
	public toLoadMore = true;
	constructor(
		private _announc: AnnounceService,
		private router: Router,
		private _share: SharedService,
	) { }

	ngOnInit(): void {
		this.getAllAnnouncements()
	}

	getAllAnnouncements(): void {
		this._announc.getAllAnnouncements()
			.subscribe((announcements: Announcement[]) => {
				this.announcements = announcements

				if (this.toLoadMore && this.announcements.length >= 4) {
					this.announcements = announcements
					this.announcements.length = 4;
				} else {
					this.announcements = announcements;
				}
			});
	}
}
