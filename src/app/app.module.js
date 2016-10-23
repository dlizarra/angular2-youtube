"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_state_service_1 = require("./shared/app-state.service");
var header_component_1 = require("./shared/nav/header/header.component");
var search_box_component_1 = require("./shared/nav/search-box/search-box.component");
var video_list_component_1 = require("./videos/video-list/video-list.component");
var video_list_item_component_1 = require("./videos/video-list-item/video-list-item.component");
var video_detail_component_1 = require("./videos/video-detail/video-detail.component");
var videos_component_1 = require("./videos/videos.component");
var video_service_1 = require("./videos/shared/video.service");
var youtube_safe_url_pipe_1 = require("./shared/youtube-safe-url.pipe");
var ng2_pagination_1 = require("ng2-pagination");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                search_box_component_1.SearchBoxComponent,
                videos_component_1.VideosComponent,
                video_list_component_1.VideoListComponent,
                video_list_item_component_1.VideoListItemComponent,
                video_detail_component_1.VideoDetailComponent,
                ng2_pagination_1.PaginationControlsCmp,
                youtube_safe_url_pipe_1.YoutubeSafeUrlPipe,
                ng2_pagination_1.PaginatePipe
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
            providers: [
                app_state_service_1.AppState,
                video_service_1.VideoService,
                ng2_pagination_1.PaginationService
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
