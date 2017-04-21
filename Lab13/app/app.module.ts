import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {DbService} from './db.service';
import {myRoutes} from './app.routes';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    ProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
