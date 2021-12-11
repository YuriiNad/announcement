import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnouncementComponent } from './pages/add-announcement/add-announcement.component';
import { AnnouncementContainerComponent } from './pages/announcement-container/announcement-container.component';
import { AnnouncementDetailsComponent } from './pages/announcement-details/announcement-details.component';
import { AnnouncementUpdateComponent } from './pages/announcement-update/announcement-update.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: 'announcements', pathMatch: 'full' },
	{ path: 'announcements', component: AnnouncementContainerComponent },
	{ path: 'announcement/:id', component: AnnouncementDetailsComponent },
	{ path: 'add-announcement', component: AddAnnouncementComponent },
	{ path: 'edit-announcement/:id', component: AnnouncementUpdateComponent },

	{ path: '**', component: NotFoundComponent },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
