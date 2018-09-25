import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  users : number = 0;

  usersRef = this.db.list("User Data/Users");
  constructor(
  public navCtrl: NavController,
  private db: AngularFireDatabase,
  private menuCtrl : MenuController,
  ) {
      this.menuCtrl.enable(true);
      this.getUsers();
    }
    
    getUsers(){
      this.usersRef.snapshotChanges().subscribe(snap=>{
        this.users = snap.length;
      })
    }

}
