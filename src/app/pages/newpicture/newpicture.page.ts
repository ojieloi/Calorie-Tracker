import { Component, OnInit } from "@angular/core";
import { ToastService } from "src/app/services/toast.service";
import { SaveService } from "src/app/services/save.service";
import { NavController } from "@ionic/angular";
import * as firebase from "firebase";

@Component({
  selector: "app-newpicture",
  templateUrl: "./newpicture.page.html",
  styleUrls: ["./newpicture.page.scss"],
})
export class NewpicturePage implements OnInit {
  constructor(
    private nav: NavController,
    private saveService: SaveService,
    private toastService: ToastService
  ) {}

  ngOnInit() {}

  setLion() {
    let pictureUrl = "Lion@3x.png";
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.saveService.storeUserEmoji(pictureUrl);
        this.toastService.presentGoodToast("Lion Set");
        this.nav.navigateBack("profile/");
      }
    });
  }

  setZebra() {
    let pictureUrl = "Zebra@3x.png";
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.saveService.storeUserEmoji(pictureUrl);
        this.toastService.presentGoodToast("Zebra Set");
        this.nav.navigateBack("profile/");
      }
    });
  }

  setSkull() {
    let pictureUrl = "Skull@3x.png";
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.saveService.storeUserEmoji(pictureUrl);
        this.toastService.presentGoodToast("Skull Set");
        this.nav.navigateBack("profile/");
      }
    });
  }

  setOwl() {
    let pictureUrl = "Owl@3x.png";
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        this.saveService.storeUserEmoji(pictureUrl);
        this.toastService.presentGoodToast("Owl Set");
        this.nav.navigateBack("profile/");
      }
    });
  }
}
