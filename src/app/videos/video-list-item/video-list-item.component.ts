import {Component, Input} from "@angular/core";
import {Video} from "../shared";
import {AppState} from "../../shared/app-state.service";

@Component({
  selector: 'dl-video-list-item',
  templateUrl: 'video-list-item.component.html',
  styleUrls: ['video-list-item.component.css']
})
export class VideoListItemComponent {
  @Input() video: Video;

  constructor(private appState: AppState) {}

  onClick(){
    this.appState.activeVideo = this.video;
  }

}
