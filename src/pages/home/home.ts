import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, AlertController, MenuController, IonicPage } from 'ionic-angular';
//import * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

//  sampleRef = firebase.database().ref("Samples/");
  public samples: Array<any> = [];
  totSamples: number = 0;

  constructor(
  public navCtrl: NavController,
  public toastCtrl : ToastController,
  public loadingCtrl : LoadingController,
  public alertCtrl : AlertController,
  private menuCtrl : MenuController) {
    this.menuCtrl.enable(true);
  }

  ionViewDidEnter() {
  }


/*  sampleFunction(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.sampleRef.once('value', itemSnapshot => {
      this.samples = [];
      itemSnapshot.forEach(itemSnap => {
        this.samples.push(itemSnap.val());
        this.totSamples = this.samples.length;
        return false;
      });
    });
    loading.dismiss();
  }
*/
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      showCloseButton: false,
    });
    toast.present();


  }

}
