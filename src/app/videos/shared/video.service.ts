import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import {Video} from "./video.model";
import {AppState} from "../../shared/app-state.service";
import * as moment from 'moment';



@Injectable()
export class VideoService {

  constructor(private http: Http, private appState: AppState) {}

  fetchVideos(query: string) {
    this.http
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}`+
          '&maxResults=25' +
          '&key=AIzaSyAARhzDEdAwaIYKelgTmVa8Nez5sLKjBcM')
      .map(response => response.json())
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
      })
  }
}
