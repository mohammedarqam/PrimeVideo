import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { HomePage } from '../pages/home/home';
import { KidsPage } from '../pages/kids/kids';
import { MoviesPage } from '../pages/movies/movies';
import { TvShowsPage } from '../pages/tv-shows/tv-shows';



export const firebaseCred = {
  apiKey: "AIzaSyC_iVRm8hUe2ZBaGM68As9jZ9rb0Ve7BlM",
  authDomain: "primevideo-c14a3.firebaseapp.com",
  databaseURL: "https://primevideo-c14a3.firebaseio.com",
  projectId: "primevideo-c14a3",
  storageBucket: "primevideo-c14a3.appspot.com",
  messagingSenderId: "31035557511"
};
firebase.initializeApp(firebaseCred);




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    KidsPage,
    MoviesPage,
    TvShowsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    KidsPage,
    MoviesPage,
    TvShowsPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
