import { Injectable } from "@angular/core";
import { ToastController, LoadingController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class ToastService {
  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {}

  async presentBadToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "bottom",
      cssClass: "bad-toast-config",
    });
    toast.present();
  }

  async presentGoodToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "bottom",
      cssClass: "good-toast-config",
    });
    toast.present();
  }

  async presentLoading(message: string) {
    const loading = await this.loadingController.create({
      message: message,
      duration: 500,
    });
    await loading.present();
    console.log("Loading dismissed!");
  }
}
