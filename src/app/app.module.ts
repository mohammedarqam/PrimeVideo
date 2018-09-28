import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { HomePage } from '../pages/Main Pages/home/home';
import { KidsPage } from '../pages/Main Pages/kids/kids';
import { MoviesPage } from '../pages/Main Pages/movies/movies';
import { TvShowsPage } from '../pages/Main Pages/tv-shows/tv-shows';
import { DetailPopPage } from '../pages/Extra/detail-pop/detail-pop';
import { ViewOptionsPage } from '../pages/Extra/view-options/view-options';
import { WatchlistPage } from '../pages/Extra/watchlist/watchlist';



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
    DetailPopPage,
    ViewOptionsPage,
    WatchlistPage,
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
    DetailPopPage,
    ViewOptionsPage,
    WatchlistPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
