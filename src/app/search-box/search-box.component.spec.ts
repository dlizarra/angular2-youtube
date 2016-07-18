/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SearchBoxComponent } from './search-box.component';

describe('Component: SearchBox', () => {
  it('should create an instance', () => {
    let component = new SearchBoxComponent();
    expect(component).toBeTruthy();
  });
});
