import { Component } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2'
import { Sticker } from '../sticker/sticker';
import { StickerService } from '../sticker/sticker.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: [ 'dashboard.component.css' ]
})

export class DashboardComponent {
  private stickers: FirebaseListObservable<Sticker[]>

  constructor(private service: StickerService) {
    this.stickers = service.stickers
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/