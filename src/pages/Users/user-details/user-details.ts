import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {

  user = this.navParams.get("user");

  constructor(
  public navCtrl: NavController, 
  public viewCtrl : ViewController,
  public navParams: NavParams
  ) {
    console.log(this.user);
  }


  close(){
    this.viewCtrl.dismiss();
  }


}
