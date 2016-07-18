import {Component} from "@angular/core";
import {VideoListItemComponent} from "../video-list-item";


@Component({
  moduleId: module.id,
  selector: 'dl-video-list',
  templateUrl: 'video-list.component.html',
  styleUrls: ['video-list.component.css'],
  directives: [VideoListItemComponent]
})
export class VideoListComponent {

  constructor() {}

}
