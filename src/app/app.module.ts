import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { DashboardPage } from '../pages/Extra/dashboard/dashboard';
import { LoginPage } from '../pages/Extra/login/login';
import { UsersPage } from '../pages/Users/users/users';
import { UserDetailsPage } from '../pages/Users/user-details/user-details';
import { UserOptionsPage } from '../pages/Users/user-options/user-options';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';



export const firebaseCred = {
// Add Firebase Api key Here
};
firebase.initializeApp(firebaseCred);




@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    LoginPage,
    UsersPage,
    UserDetailsPage,
    UserOptionsPage,
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
    DashboardPage,
    LoginPage,
    UsersPage,
    UserDetailsPage,
    UserOptionsPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
