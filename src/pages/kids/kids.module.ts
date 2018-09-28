import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KidsPage } from './kids';

@NgModule({
  declarations: [
    KidsPage,
  ],
  imports: [
    IonicPageModule.forChild(KidsPage),
  ],
})
export class KidsPageModule {}
