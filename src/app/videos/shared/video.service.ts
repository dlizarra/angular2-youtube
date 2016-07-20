import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import {Video} from "./video.model";

@Injectable()
export class VideoService {

  videos: Video[] = [];

  constructor(private http: Http) {}

  fetchVideos(query: String){
    this.http
      .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyAARhzDEdAwaIYKelgTmVa8Nez5sLKjBcM`)
      .map(response => response.json())
      .subscribe(data => this.videos = data.items.map(item => new Video(item.snippet.title)));
  }
}
