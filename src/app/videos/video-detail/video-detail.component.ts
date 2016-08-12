import { Component } from "@angular/core";
import { AppState } from "../../shared/app-state.service";

@Component({
  moduleId: module.id,
  selector: 'dl-video-detail',
  templateUrl: 'video-detail.component.html',
  styleUrls: ['video-detail.component.css']
})
export class VideoDetailComponent {

  constructor(private appState: AppState) {}

}
