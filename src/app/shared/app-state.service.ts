import { Injectable } from "@angular/core";
import { Video } from "../videos/shared/video.model";


@Injectable()
export class AppState {

  videoList: Video[] = [];
  activeVideo: Video;

  constructor() {
  }

}
