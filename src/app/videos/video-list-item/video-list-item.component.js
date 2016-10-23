"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var VideoListItemComponent = (function () {
    function VideoListItemComponent(appState) {
        this.appState = appState;
    }
    VideoListItemComponent.prototype.onClick = function () {
        this.appState.activeVideo = this.video;
    };
    __decorate([
        core_1.Input()
    ], VideoListItemComponent.prototype, "video", void 0);
    VideoListItemComponent = __decorate([
        core_1.Component({
            selector: 'dl-video-list-item',
            templateUrl: 'video-list-item.component.html',
            styleUrls: ['video-list-item.component.css']
        })
    ], VideoListItemComponent);
    return VideoListItemComponent;
}());
exports.VideoListItemComponent = VideoListItemComponent;
