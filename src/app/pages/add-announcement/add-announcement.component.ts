import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Announcement } from 'src/app/models/announcement';
import { AnnounceService } from 'src/app/services/announce.service';

@Component({
	selector: 'app-add-announcement',
	templateUrl: './add-announcement.component.html',
	styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent implements OnInit {
	addAnnouncement!: FormGroup;
	public isLoaded = false;
	constructor(
		private _announc: AnnounceService,
		private router: Router,
	) { }

	ngOnInit(): void {
		setTimeout(() => {
			this.isLoaded = true
		}, 1000);

		this.addAnnouncement = new FormGroup({
			title: new FormControl('', Validators.required),
			description: new FormControl('', Validators.required),
		})
	}

	addNewAnnouncement(): void {
		const newAnnouncement: Announcement = {
			...this.addAnnouncement.value,
			timeAdded: this.getTimeStamp(),
		}

		this._announc.addNewAnnouncement(newAnnouncement)
			.subscribe((annouc: Announcement) => {
				console.log(annouc);

				this.addAnnouncement.reset();
			}, err => console.error(err));

		setTimeout(() => {
			this.router.navigate(['/announcements'])
		}, 700);

	}

	getTimeStamp() {
		return this._announc.getTimeStamp();
	}
}	
