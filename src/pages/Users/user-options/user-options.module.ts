import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserOptionsPage } from './user-options';

@NgModule({
  declarations: [
    UserOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserOptionsPage),
  ],
})
export class UserOptionsPageModule {}
