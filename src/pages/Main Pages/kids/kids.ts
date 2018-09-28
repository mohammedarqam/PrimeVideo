import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-kids',
  templateUrl: 'kids.html',
})
export class KidsPage {

  bannersRef = this.db.list('Extra Data/Banners');
  public banners: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    private db : AngularFireDatabase,
    ) {
      this.getBanners();
    }


    getBanners() {
      this.bannersRef.snapshotChanges().subscribe(snap=>{
        this.banners = [];
        snap.forEach(snp=>{
          let temp : any = snp.payload.val();
          temp.key = snp.key;
          this.banners.push(temp);
        })
      })
      console.log(this.banners);
    }

}
