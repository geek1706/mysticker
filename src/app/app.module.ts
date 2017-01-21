import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { StickerDetailComponent } from './sticker-detail.component';
import { StickersComponent } from './stickers.component';
import { StickerService } from './sticker.service';
import { AppRoutingModule } from './app-routing.module';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDWTOP-ADRJ0gInos8xPj_C8h5tGcsYtGI",
  authDomain: "sticker-store-8846d.firebaseapp.com",
  databaseURL: "https://sticker-store-8846d.firebaseio.com",
  storageBucket: "sticker-store-8846d.appspot.com",
  messagingSenderId: "831121864728"
};

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    StickerDetailComponent,
    StickersComponent
  ],
  providers: [StickerService],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/