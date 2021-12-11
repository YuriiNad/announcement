import { AfterContentChecked, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnnounceService } from 'src/app/services/announce.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {

	public searchAnnounce = '';

	constructor(
		private router: Router,
		private _announc: AnnounceService,
		private _share: SharedService,
	) { }

	ngOnInit(): void {
	}

	ngDoCheck() {
		this.setAnnouncement();
	}

	addNewAnnouncement() {
		this.router.navigate(['/add-announcement']);
	}

	setAnnouncement(): void {
		this._share.setAnnouncement(this.searchAnnounce);
	}
}
