import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController, PopoverController } from 'ionic-angular';
import { HomePage } from '../pages/Main Pages/home/home';
import { MoviesPage } from '../pages/Main Pages/movies/movies';
import { TvShowsPage } from '../pages/Main Pages/tv-shows/tv-shows';
import { KidsPage } from '../pages/Main Pages/kids/kids';
import { ViewOptionsPage } from '../pages/Extra/view-options/view-options';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;


  constructor(
    public platform: Platform,    
    public popoverCtrl: PopoverController,
    ) {
      this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }





  viewOptions(myEvent) {
    let popover = this.popoverCtrl.create(ViewOptionsPage,{},{cssClass: 'backdropOpacityPopover'});
    popover.present({
      ev: myEvent
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
