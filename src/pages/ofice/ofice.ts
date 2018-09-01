import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OficePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-ofice',
  templateUrl: 'ofice.html',
})
export class OficePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("ini page ofice");
    let namaUser = this.navParams.get("username");
    let pw = this.navParams.get("password");
    console.log(namaUser+" "+pw);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OficePage');
  }

  goBack(){
    this.navCtrl.pop();
  }

  reset(){
    this.navCtrl.setRoot(HomePage);
  }

}
