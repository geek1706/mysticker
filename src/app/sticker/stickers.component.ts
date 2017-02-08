import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseListObservable } from 'angularfire2'

import { Sticker } from './sticker';
import { StickerService } from './sticker.service';

@Component({
  moduleId: module.id,
  selector: 'my-stickers',
  templateUrl: 'stickers.component.html',
  styleUrls: ['stickers.component.css']
})
export class StickersComponent implements OnInit {
  stickers: FirebaseListObservable<Sticker[]>;
  selectedSticker: Sticker;

  constructor(
    private router: Router,
    private service: StickerService) { }

  ngOnInit(): void {
    this.stickers = this.service.stickers
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