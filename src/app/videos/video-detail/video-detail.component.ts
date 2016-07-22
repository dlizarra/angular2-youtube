import {Component} from "@angular/core";
import {AppState} from "../../shared/app-state.service";
import {YoutubeSafeUrlPipe} from "../../shared/youtube-safe-url.pipe";

@Component({
  moduleId: module.id,
  selector: 'dl-video-detail',
  templateUrl: 'video-detail.component.html',
  styleUrls: ['video-detail.component.css'],
  pipes: [YoutubeSafeUrlPipe]
})
export class VideoDetailComponent {

  constructor(private appState: AppState) {
  }


}
