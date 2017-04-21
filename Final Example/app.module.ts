import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MyPostComponent} from './my-post/my-post.component';
import {MyPipePipe} from './my-pipe.pipe';
import {MyHttpService} from './my-http.service';

@NgModule({
  declarations: [
    AppComponent,
    MyPostComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MyHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
