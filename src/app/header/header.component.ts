import { Component } from "@angular/core";
import { SearchBoxComponent } from '../search-box'

@Component({
  moduleId: module.id,
  selector: 'dl-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [SearchBoxComponent]
})
export class HeaderComponent {

  constructor() {}

}
