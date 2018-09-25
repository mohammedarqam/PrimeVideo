import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, LoadingController, ToastController, Alert } from 'ionic-angular';
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  pass: string;
  
  public user : Array<any> = [];


  constructor(
    public navCtrl: NavController,
    private menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    ) {
    this.menuCtrl.enable(false);
    
}




checkData(){
  if(this.email){
    if(this.pass){
      this.login();
    }else{
      this.presentToast("Password Not Provided")
    }
  }else{
    this.presentToast("Email Not Provided")
  }
}


  login() {
    let loading = this.loadingCtrl.create({
      content: 'Logging In...'
    });
    loading.present();

    firebase.auth().signInWithEmailAndPassword(this.email,this.pass).then(()=>{
      loading.dismiss();
    }).catch((e)=>{
      var err = e.message;
      this.presentToast(err);      
      loading.dismiss();
    })

  } 

  notAdmin(){
    firebase.auth().signOut().then(()=>{
      this.presentToast("You are not an Admin");
      this.email = null;
      this.pass = null;
    })
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
