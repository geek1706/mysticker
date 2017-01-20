import { Sticker } from './sticker';
import { STICKERS } from './mock-stickers';
import { Injectable } from '@angular/core';

@Injectable()
export class StickerService {
  getStickers(): Promise<Sticker[]> {
    return Promise.resolve(STICKERS);
  }

  getStickersSlowly(): Promise<Sticker[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getStickers()), 2000);
    });
  }

  getSticker(id: number): Promise<Sticker> {
    return this.getStickers()
               .then(stickers => stickers.find(sticker => sticker.id === id));
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/