import {Component} from "@angular/core";
import {VideoListItemComponent} from "../video-list-item";
import {AppState} from "../../shared/app-state.service";
import {VideoService} from "../shared/video.service";
import {PaginationControlsCmp, PaginatePipe, PaginationService} from 'ng2-pagination';

@Component({
  moduleId: module.id,
  selector: 'dl-video-list',
  templateUrl: 'video-list.component.html',
  styleUrls: ['video-list.component.css'],
  directives: [VideoListItemComponent, PaginationControlsCmp],
  pipes: [PaginatePipe],
  providers: [PaginationService]
})
export class VideoListComponent {

  constructor(private appState: AppState, private videoService: VideoService) {}

}
