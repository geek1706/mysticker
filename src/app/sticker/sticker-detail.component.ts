import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Sticker } from './sticker';
import { StickerService } from './sticker.service';
@Component({
  moduleId: module.id,
  selector: 'my-sticker-detail',
  templateUrl: 'sticker-detail.component.html',
  styleUrls: ['sticker-detail.component.css']
})
export class StickerDetailComponent implements OnInit {
  sticker: Sticker;

  constructor(
    private heroService: StickerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/