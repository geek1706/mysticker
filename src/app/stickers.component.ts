import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Sticker } from './sticker';
import { StickerService } from './sticker.service';

@Component({
  moduleId: module.id,
  selector: 'my-stickers',
  templateUrl: 'stickers.component.html',
  styleUrls: [ 'stickers.component.css' ]
})
export class StickersComponent implements OnInit {
  stickers: Sticker[];
  selectedSticker: Sticker;

  constructor(
    private router: Router,
    private heroService: StickerService) { }

  getStickers(): void {
    this.heroService.getStickers().then(stickers => this.stickers = stickers);
  }

  ngOnInit(): void {
    this.getStickers();
  }

  onSelect(sticker: Sticker): void {
    this.selectedSticker = sticker;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedSticker.id]);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/