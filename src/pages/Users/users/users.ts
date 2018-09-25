import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserOptionsPage } from '../user-options/user-options';



@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  usersRef = this.db.list('User Data/Users', ref=>ref.orderByChild("TimeStamp"));
  users: Array<any> = [];
  usersLoaded: Array<any> = [];


  constructor(
  public navCtrl: NavController, 
  public db : AngularFireDatabase,
  public popoverCtrl : PopoverController,
  public navParams: NavParams
  ) {
    this.getUsers();
  }



  getUsers(){
    this.usersRef.snapshotChanges().subscribe(snap=>{
      let tempArray = [];
      snap.forEach(snp=>{
        let temp : any = snp.payload.val();
        temp.key = snp.key;
        tempArray.push(temp);
      })
      this.users = tempArray;
      this.usersLoaded = tempArray;
    })

  }

  initializeItems(): void {
    this.users = this.usersLoaded;
  }
  getItems(searchbar) {
    this.initializeItems();
    let q = searchbar;
    if (!q) {
      return;
    }
    this.users = this.users.filter((v) => {
      if((v.Name || v.Phone || v.Email) && q) {
        if (
          (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1)
          ||(v.Phone.toLowerCase().indexOf(q.toLowerCase()) > -1)
          ||(v.Email.toLowerCase().indexOf(q.toLowerCase()) > -1)
          ) {
          return true;
        }
        return false;
      }
    });
  }






  viewOptions(myEvent,u){
    let popover = this.popoverCtrl.create(UserOptionsPage,{user : u});
    popover.present({
      ev: myEvent
    });
}




}
