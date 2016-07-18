import { Component, OnInit } from '@angular/core';
import { VideoListComponent } from './video-list'
import { VideoDetailComponent } from './video-detail'

@Component({
  moduleId: module.id,
  selector: 'dl-videos',
  templateUrl: 'videos.component.html',
  styleUrls: ['videos.component.css'],
  directives: [VideoListComponent, VideoDetailComponent]
})
export class VideosComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
