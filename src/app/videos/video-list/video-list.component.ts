import {Component} from "@angular/core";
import {VideoListItemComponent} from "../video-list-item";
import {AppState} from "../../shared/app-state.service";

@Component({
  moduleId: module.id,
  selector: 'dl-video-list',
  templateUrl: 'video-list.component.html',
  styleUrls: ['video-list.component.css'],
  directives: [VideoListItemComponent]
})
export class VideoListComponent {

  constructor(private appState: AppState) {}

}
