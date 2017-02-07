import { Sticker } from './sticker';
import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class StickerService {
  private stickers: FirebaseListObservable<Sticker[]>;

  constructor(af: AngularFire) {
    const path = `/contents`;
    this.stickers = af.database.list(path);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/