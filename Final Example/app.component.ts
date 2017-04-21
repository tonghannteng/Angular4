import {Component} from '@angular/core';
import {MyHttpService} from './my-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts;
  pipeargs: string = '';
  title = 'app works!';

  constructor(private myHttpService: MyHttpService) {

    this.myHttpService.getPosts().subscribe(
      response => {
        this.posts = response.json();
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('get data');
      }
    );

  }

}
