import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AppState } from "./shared/app-state.service";
import { HeaderComponent } from "./shared/nav/header/header.component";
import { SearchBoxComponent } from "./shared/nav/search-box/search-box.component";
import { VideoListComponent } from "./videos/video-list/video-list.component";
import { VideoListItemComponent } from "./videos/video-list-item/video-list-item.component";
import { VideoDetailComponent } from "./videos/video-detail/video-detail.component";
import { VideosComponent } from "./videos/videos.component";
import { VideoService } from "./videos/shared/video.service";
import { YoutubeSafeUrlPipe } from "./shared/youtube-safe-url.pipe";
import { PaginationControlsCmp, PaginatePipe, PaginationService } from "ng2-pagination";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBoxComponent,
    VideosComponent,
    VideoListComponent,
    VideoListItemComponent,
    VideoDetailComponent,
    PaginationControlsCmp,
    YoutubeSafeUrlPipe,
    PaginatePipe
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    AppState,
    VideoService,
    PaginationService
  ]
})
export class AppModule {
}
