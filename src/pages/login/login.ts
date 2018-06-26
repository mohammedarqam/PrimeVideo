import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, LoadingController, ToastController } from 'ionic-angular';
//import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  lemail: string;
  lpass: string;
  
  constructor(
    public navCtrl: NavController,
    private menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
  ) {
    this.menuCtrl.enable(false);
  }

  ionViewDidEnter() {
    this.userCheck();
  }

  userCheck() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
/*
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
     this.gtHome();
      }else{
        this.lemail = null;
        this.lpass = null;
    }
    });
*/    loading.dismiss();

  }

  login() {
    let loading = this.loadingCtrl.create({
      content: 'Logging In...'
    });
    loading.present();
/*
    firebase.auth().signInWithEmailAndPassword(this.lemail, this.lpass).catch(function (error) {
      alert(error.message);
    }).then(() => {
      this.userCheck();
  });
*/  loading.dismiss();
  }

  gtHome() {
    this.navCtrl.setRoot("HomePage");
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      showCloseButton: false,
    });
    toast.present();
  }

}
