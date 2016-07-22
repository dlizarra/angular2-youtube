import {Component, OnInit} from "@angular/core";
import {VideoListItemComponent} from "../video-list-item";
import {VideoService} from "../shared/video.service";
import {PaginationControlsCmp, PaginatePipe, PaginationService} from "ng2-pagination";
import {Video} from "../shared/video.model";
import * as moment from 'moment';
import {AppState} from "../../shared/app-state.service";

@Component({
  moduleId: module.id,
  selector: 'dl-video-list',
  templateUrl: 'video-list.component.html',
  styleUrls: ['video-list.component.css'],
  directives: [VideoListItemComponent, PaginationControlsCmp],
  pipes: [PaginatePipe],
  providers: [PaginationService]
})
export class VideoListComponent implements OnInit {

  videoList:Video[] = [];

  constructor(private videoService:VideoService, private appState:AppState) {
  }


  ngOnInit() {
    this.videoService.fetchVideos('')
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
        this.appState.activeVideo = this.appState.videoList[0];
      });
  }


}
