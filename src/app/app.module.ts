import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

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
AngularFireModule.initializeApp(firebaseConfig)
],
declarations: [ AppComponent ],
bootstrap: [ AppComponent ]
})
export class AppModule {}