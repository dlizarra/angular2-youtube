import { Component } from '@angular/core';
import { HeaderComponent } from './shared/nav';
import { VideosComponent } from './videos'


@Component({
  moduleId: module.id,
  selector: 'dl-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent, VideosComponent]

})
export class AppComponent {
  title = 'app works!';
}
