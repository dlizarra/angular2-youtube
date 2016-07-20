import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent, environment } from './app/';
import {HTTP_PROVIDERS} from "@angular/http";
import {VideoService} from "./app/videos/shared/video.service";
import {AppState} from "./app/shared/app-state.service";

if (environment.production) {
  enableProdMode();
}

// TODO remove disableDeprecatedForms and provideForms when on rc 5.
bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  HTTP_PROVIDERS,
  AppState,
  VideoService
]);

