import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';

import * as firebase from 'firebase';
import { LoginPage } from '../pages/Extra/login/login';
import { UsersPage } from '../pages/Users/users/users';
import { DashboardPage } from '../pages/Extra/dashboard/dashboard';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  activePage: any;


  pages: Array<{ title: string, component: any, icon: any, color : string }>;

  constructor(
    public platform: Platform,    
    public toastCtrl: ToastController,
    ) {
      this.initializeApp();

    this.pages = [
      { title: 'DashBoard', component: DashboardPage, icon: "flash",color: "yellowi" },
      { title: 'Users', component: UsersPage, icon: "ios-people",color: "whiter" },


    ];
    this.activePage = this.pages[0];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        firebase.database().ref("Admin Data").child("Admins").child(user.uid).once('value',itemSnap=>{
            if(itemSnap.exists()){
              var welMsg = "Welcome"+" "+itemSnap.val().Name;
              this.rootPage = DashboardPage;
              this.presentToast(welMsg);
            }else{
              firebase.auth().signOut().then(()=>{
                this.rootPage = LoginPage;
                this.presentToast("You are not registered a Admin")
              })
            }
    });
      }
      else{
        this.rootPage = LoginPage;
      }
    });  
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    this.activePage = page;

  }
  checkActive(page) {
    return page == this.activePage;
  }

  signOut() {
    firebase.auth().signOut().then(() => {
      this.nav.setRoot(LoginPage);
      this.presentToast("Signed Out");
    }).catch((error) => {
      console.log(error.message);
    });

 
}
presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 4000,
    position : "top",
    showCloseButton: false,
  });
  toast.present();
}

}
