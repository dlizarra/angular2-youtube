"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var moment = require('moment');
var video_model_1 = require("../../../videos/shared/video.model");
var SearchBoxComponent = (function () {
    function SearchBoxComponent(videoService, appState) {
        this.videoService = videoService;
        this.appState = appState;
    }
    SearchBoxComponent.prototype.search = function (query) {
        var _this = this;
        this.videoService.fetchVideos(query)
            .subscribe(function (data) {
            _this.appState.videoList = data.items.map(function (item) {
                return new video_model_1.Video(item.id.videoId, item.snippet.title, item.snippet.thumbnails.high.url, item.snippet.channelTitle, item.snippet.channelId, moment(item.snippet.publishedAt).fromNow(), item.snippet.description);
            });
        });
    };
    SearchBoxComponent = __decorate([
        core_1.Component({
            selector: 'dl-search-box',
            templateUrl: 'search-box.component.html',
            styleUrls: ['search-box.component.css']
        })
    ], SearchBoxComponent);
    return SearchBoxComponent;
}());
exports.SearchBoxComponent = SearchBoxComponent;
