import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AnnouncementContainerComponent } from './pages/announcement-container/announcement-container.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { AnnouncementDetailsComponent } from './pages/announcement-details/announcement-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddAnnouncementComponent } from './pages/add-announcement/add-announcement.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { FilterPipe } from 'src/shared/filter.pipe';
import { AnnouncementUpdateComponent } from './pages/announcement-update/announcement-update.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		AnnouncementContainerComponent,
		AnnouncementComponent,
		AnnouncementDetailsComponent,
		NotFoundComponent,
		AddAnnouncementComponent,
		FilterPipe,
		AnnouncementUpdateComponent,
  LoadingComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		ReactiveFormsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
