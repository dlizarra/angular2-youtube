"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var video_model_1 = require("../shared/video.model");
var moment = require("moment");
var VideoListComponent = (function () {
    function VideoListComponent(videoService, appState) {
        this.videoService = videoService;
        this.appState = appState;
        this.videoList = [];
    }
    VideoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.videoService.fetchVideos('typescript')
            .subscribe(function (data) {
            _this.appState.videoList = data.items.map(function (item) {
                return new video_model_1.Video(item.id.videoId, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.channelTitle, item.snippet.channelId, moment(item.snippet.publishedAt).fromNow(), item.snippet.description);
            });
            _this.appState.activeVideo = _this.appState.videoList[0];
        });
    };
    VideoListComponent = __decorate([
        core_1.Component({
            selector: 'dl-video-list',
            templateUrl: 'video-list.component.html',
            styleUrls: ['video-list.component.css']
        })
    ], VideoListComponent);
    return VideoListComponent;
}());
exports.VideoListComponent = VideoListComponent;
