import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, LoadingOptions, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private loadingController: LoadingController,
    private router: Router,
    private toastController: ToastController

  ){ }
  //========= Loading =========
  //PRESENT
async presentLoading(opts?: LoadingOptions) {
  const loading = await this.loadingController.create();
  await loading.present();
}

//DISMISS
    async dismissLoading(){
return await this.loadingController.dismiss()

    }
//===========local storage===========
// SEt

    setElementInLocalstorage(key: string, element: any){

      return localStorage.setItem(key, JSON.stringify(element))

    }
// Get
    getElementFromLocalstorage(key: string){

      return JSON.parse(localStorage.getItem(key));

    }
    async presentToast(opts: ToastOptions) {
      const toast = await this.toastController.create(opts);
      toast.present();
    }
//======== Router =======
    routerLink ( url: string ){
return this.router.navigateByUrl(url);

    }

}


