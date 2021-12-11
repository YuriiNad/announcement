import { Pipe, PipeTransform } from "@angular/core";
import { Announcement } from "src/app/models/announcement";


@Pipe({
	name: 'filter'
})


export class FilterPipe implements PipeTransform {
	transform(announcements: Announcement[], search: string = ''): Announcement[] {
		if (!search.trim()) {
			return announcements
		}
		return announcements.filter(announcement => {
			return announcement.title?.toLowerCase().indexOf(search.toLowerCase()) !== -1
		})
	}
}