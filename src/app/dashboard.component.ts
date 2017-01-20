import { Component, OnInit } from '@angular/core';

import { Sticker } from './sticker';
import { StickerService } from './sticker.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  stickers: Sticker[] = [];

  constructor(private heroService: StickerService) { }

  ngOnInit(): void {
    this.heroService.getStickers()
      .then(stickers => this.stickers = stickers.slice(1, 5));
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/