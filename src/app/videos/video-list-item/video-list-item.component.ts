import {Component, Input} from "@angular/core";
import {Video} from '../shared';

@Component({
  moduleId: module.id,
  selector: 'dl-video-list-item',
  templateUrl: 'video-list-item.component.html',
  styleUrls: ['video-list-item.component.css']
})
export class VideoListItemComponent {
  @Input() video: Video;

  constructor() {}

}
