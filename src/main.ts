import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

// TODO remove disableDeprecatedForms and provideForms when on rc 5.
bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms()
]);

