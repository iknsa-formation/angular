import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apps works!';
  posts: Array<any>;

  constructor( private http: Http ) {
      this.http.get('http://localhost/symfony3/web/app_dev.php/post/restfulList').subscribe(response =>  {
        this.posts = response.json().posts;
    });
  }
}
