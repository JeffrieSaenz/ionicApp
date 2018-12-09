import { RegisterProvider } from './../../providers/register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  fullname: String;
  email: String;
  password: String;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private registerProvider : RegisterProvider,
    private toastCtrl: ToastController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  sendRequest(){
    this.presentToast("Voy al servidor");
    this.registerProvider.serverRequest().subscribe(res=>{
      setTimeout(
        ()=>{
          this.presentToast(res.json())
        }, 3000);
    }); 
  }

  loginPage(){
    this.navCtrl.push("LoginPage");
  }

  //Metodo que crea el mensaje de Toast
  presentToast(serverMessage: string) {
    let toast = this.toastCtrl.create({
      message: serverMessage,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  

}
