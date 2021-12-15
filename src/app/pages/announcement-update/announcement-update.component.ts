import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Announcement } from 'src/app/models/announcement';
import { AnnounceService } from 'src/app/services/announce.service';

@Component({
	selector: 'app-announcement-update',
	templateUrl: './announcement-update.component.html',
	styleUrls: ['./announcement-update.component.scss']
})
export class AnnouncementUpdateComponent implements OnInit {
	updateAnnouncement!: FormGroup;

	public isLoaded = false;
	public announcement: Announcement = {}
	public announcementId!: string | null;
	constructor(
		private acRoute: ActivatedRoute,
		private _announc: AnnounceService,
		private router: Router,
	) { }

	ngOnInit(): void {
		setTimeout(() => {
			this.isLoaded = true
		}, 1000);
		this.getCurrentAnnouncement();


		this.updateAnnouncement = new FormGroup({
			title: new FormControl('', Validators.required),
			description: new FormControl('', Validators.required),
		})
	}

	editAnnouncement(): void {
		const updatedAnnouncement: Announcement = {
			...this.updateAnnouncement.value,
			timeAdded: this.getTimeStamp(),
		}

		this._announc.editAnnouncement(this.announcementId, updatedAnnouncement)
			.subscribe((updAnnouc: Announcement) => {
			}, err => console.error(err))

		setTimeout(() => {
			this.router.navigate(['/announcements'])
		}, 700);
	}

	getCurrentAnnouncement() {
		this.acRoute.paramMap.subscribe((id: ParamMap) => {
			this.announcementId = id.get('id');
		})

		this._announc.getAllAnnouncements()
			.subscribe((announcements: Announcement[]) => {
				const currAnnouncement = announcements.find(announcement => announcement.id === this.announcementId)
				if (currAnnouncement) {
					this.announcement = currAnnouncement
				}
			})
	}

	getTimeStamp() {
		return this._announc.getTimeStamp();
	}
}
