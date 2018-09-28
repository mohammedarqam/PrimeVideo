import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TvShowsPage } from './tv-shows';

@NgModule({
  declarations: [
    TvShowsPage,
  ],
  imports: [
    IonicPageModule.forChild(TvShowsPage),
  ],
})
export class TvShowsPageModule {}
