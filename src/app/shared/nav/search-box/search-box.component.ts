import {Component} from "@angular/core";
import {VideoService} from "../../../videos/shared/video.service";

@Component({
  moduleId: module.id,
  selector: 'dl-search-box',
  templateUrl: 'search-box.component.html',
  styleUrls: ['search-box.component.css']
})
export class SearchBoxComponent{

  constructor(private videoService: VideoService) {}

  onClick(query: string) {
    this.videoService.fetchVideos(query);
  }

}
