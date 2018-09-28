import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPopPage } from './detail-pop';

@NgModule({
  declarations: [
    DetailPopPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailPopPage),
  ],
})
export class DetailPopPageModule {}
