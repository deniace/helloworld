import { Component } from '@angular/core';
import { NavController, LoadingController, Loading, AlertController, ToastController, ActionSheetController,
ModalController, PopoverController } from 'ionic-angular';
import { OficePage } from '../ofice/ofice';
import { ProfilPage } from './../profil/profil';
import { PopoverPage } from './../popover/popover';

import { Http } from '@angular/http'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  namaUser: string = "";
  password: string = "";
  userType:any;
  gender:any;
  notif:boolean;

  constructor(public navCtrl: NavController, public loadingController : LoadingController
    ,public alertControler: AlertController, public toastController:ToastController,
    public actionSheetController: ActionSheetController, public modalController: ModalController,
    public popoverController: PopoverController, public http:Http) {
    console.log("hello form cosntructor");

    this.getData();
  }

  getData(){
    this.http.get("http://jsonplaceholder.typicode.com/users");
  }

  login(){
    let loading = this.loadingController.create({

    });
    loading.present();

    // hide loading affter 3000 ms
    setTimeout(()=>{
      loading.dismiss()
    },3000);

    console.log("lagin buton clik");
    console.log(this.namaUser);
    console.log(this.password);
    console.log(this.userType);
    console.log(this.gender);
    console.log(this.notif);
  }

  cancel(){
    console.log("cancel cliked");
    this.namaUser = "";
    this.password = "";
    this.userType = "";
    this.gender = "";
    
  }

  alert(){
    // let alert = this.alertControler.create({
    //   title : "conguration",
    //   subTitle : "put your email here",
    //   inputs: [{
    //     name:"email",
    //     placeholder:"user@email.com"
    //   }],
    //   buttons: [{
    //     text:"oke",
    //     handler:(data)=>{
    //       console.log(data);
    //     }
    //   }]
    // });
    let alert = this.alertControler.create();
    alert.setSubTitle("congrulatiaon");

    alert.addInput({
      type: "radio",
      label: "nothanks",
      value:"dont send"
    });

    alert.addInput({
      type: "radio",
      label: "yes",
      value:"send"
    });

    alert.addButton({
      text:"oke",
      handler:(data)=>{
        console.log(data);
      }
    });

    alert.present();
  }

  toast(){
    let toast = this.toastController.create({
      message:"ini toast",
      position:'middle',
      duration:3000,
      showCloseButton:true,
      closeButtonText:"oke"
    });
    toast.present();
  }

  action(){
    let action = this.actionSheetController.create({
      title:"pilih pilihan",
      buttons:[{
        text:"Share ke facebook",
        icon:"logo-facebook",
        handler:()=>{
          console.log("share FB");
        }},{
        text:"Share ke IG",
        icon:"logo-instagram",
        handler:()=>{
          console.log("share IG");
        }},{
        text:"Share ke YT",
        icon:"logo-youtube",
        handler:()=>{
          console.log("share yt");
        }},
        {
        text:"Share ke email",
        icon:"mail",
        handler:()=>{
          console.log("share mail");
          return false;
        }},{
        text:"cancel",
        role:"cancel",
        icon:"close",
        handler:()=>{
          console.log("Cancel");
        }
      }]
    });

    action.present();
  }

  loading(){
    let loading = this.loadingController.create({
      content:"loading.......",
      spinner:"ios",
      duration:3000
    });
    loading.present();
  }  

  gotoOfiece(){
    this.navCtrl.push(OficePage,{"username":this.namaUser, "password":this.password});
  }

  openModal(){
    let modal = this.modalController.create(ProfilPage,{"username":this.namaUser, "password":this.password});
    modal.onDidDismiss((data)=>{
      console.log(data);
    });
    modal.present();
  }

  presenPoper(ev){
    let poper = this.popoverController.create(PopoverPage);
    poper.present();
  }


}
