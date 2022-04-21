import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'login-ui',
  templateUrl: 'login.ui.html',
})
export class LoginPage {

  constructor(
      private routes:Router,
      public toastController: ToastController
  ) {}
   async OnClickLogin(){
        this.routes.navigate(['main-tabs']);
        console.log("clicked")
        this.presentToastWithOptions("Wrong username/password","","bottom")
    }
   
    async presentToastWithOptions(header:string,message:string,position:any) {
        const toast = await this.toastController.create({
          header: header,
          message: message,
          icon: 'warning-outline',
          position: position,
          duration: 2000
       
        });
        await toast.present();
    
        const { role } = await toast.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);
      }
}
