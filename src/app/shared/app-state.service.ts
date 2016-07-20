import { Injectable } from '@angular/core';
import {Video} from "../videos/shared/video.model";

@Injectable()
export class AppState {

  currentPage: string;
  previousPageToken: string;
  videoList: Video[] = [];

  constructor() {}

}
