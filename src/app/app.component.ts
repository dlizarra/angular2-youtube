import {Component, ViewEncapsulation} from "@angular/core";


@Component({
  moduleId: module.id,
  selector: 'dl-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class AppComponent {
  title = 'Youtube Search';
}
