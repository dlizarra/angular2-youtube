import {Component, ViewEncapsulation} from "@angular/core";
import {HeaderComponent} from "./shared/nav";
import {VideosComponent} from "./videos";



@Component({
  moduleId: module.id,
  selector: 'dl-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [HeaderComponent, VideosComponent]

})
export class AppComponent {
  title = 'app works!';
}
