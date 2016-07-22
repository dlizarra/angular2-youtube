import {Injectable} from "@angular/core";
import {Video} from "../videos/shared/video.model";
import {SafeResourceUrl} from "@angular/platform-browser";


@Injectable()
export class AppState {

  videoList: Video[] = [];
  activeVideo: Video;

  constructor() {
  }

}
