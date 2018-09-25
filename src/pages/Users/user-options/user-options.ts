import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { UserDetailsPage } from '../user-details/user-details';


@IonicPage()
@Component({
  selector: 'page-user-options',
  templateUrl: 'user-options.html',
})
export class UserOptionsPage {

  user = this.navParams.get("user");

  constructor(
  public navCtrl: NavController, 
  public viewCtrl : ViewController,
  public modalCtrl : ModalController,
  public navParams: NavParams
  ) {
  }



  viewDetails(){
    let partnerView = this.modalCtrl.create(UserDetailsPage,{user : this.user},{enableBackdropDismiss : false});
    partnerView.present();
    this.close();
  }
  close(){
    this.viewCtrl.dismiss();
  }

}
