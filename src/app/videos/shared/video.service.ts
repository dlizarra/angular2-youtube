import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {AppState} from "../../shared/app-state.service";




@Injectable()
export class VideoService {

  constructor(private http: Http, private appState: AppState) {}

  fetchVideos(query: string) {
    return this.http
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}`+
          '&maxResults=50' +
          '&type=video' +
          '&key=AIzaSyAARhzDEdAwaIYKelgTmVa8Nez5sLKjBcM')
      .map(response => response.json())
  }
}
