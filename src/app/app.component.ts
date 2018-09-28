import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { MoviesPage } from '../pages/movies/movies';
import { TvShowsPage } from '../pages/tv-shows/tv-shows';
import { KidsPage } from '../pages/kids/kids';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;


  constructor(
    public platform: Platform,    
    public toastCtrl: ToastController,
    ) {
      this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }







  gtHome(){
    this.nav.setRoot(HomePage);
  }
  gtMovies(){
    this.nav.setRoot(MoviesPage);
  }
  gtTv(){
    this.nav.setRoot(TvShowsPage);
  }
  gtKids(){
    this.nav.setRoot(KidsPage);
  }
}
