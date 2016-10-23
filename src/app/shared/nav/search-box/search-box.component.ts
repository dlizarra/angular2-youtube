import {Component} from "@angular/core";
import {VideoService} from "../../../videos/shared/video.service";
import {AppState} from "../../app-state.service";
import * as moment from 'moment';
import {Video} from "../../../videos/shared/video.model";

@Component({
  selector: 'dl-search-box',
  templateUrl: 'search-box.component.html',
  styleUrls: ['search-box.component.css']
})
export class SearchBoxComponent{

  constructor(private videoService: VideoService, private appState: AppState) {}

  search(query: string) {
    this.videoService.fetchVideos(query)
      .subscribe(data => {
        this.appState.videoList = data.items.map(item => {
          return new Video(
            item.id.videoId,
            item.snippet.title,
            item.snippet.thumbnails.high.url,
            item.snippet.channelTitle,
            item.snippet.channelId,
            moment(item.snippet.publishedAt).fromNow(),
            item.snippet.description)
        });
      });
  }

}
