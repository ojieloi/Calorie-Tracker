import { Component, OnInit } from "@angular/core";
import { SaveService } from "src/app/services/save.service";
import { ToastService } from "src/app/services/toast.service";
import { NavController } from "@ionic/angular";
import * as firebase from "firebase";

@Component({
  selector: "app-newweight",
  templateUrl: "./newweight.page.html",
  styleUrls: ["./newweight.page.scss"],
})
export class NewweightPage implements OnInit {
  weight: number;
  weightLbs: any;

  submitted = false;

  constructor(
    private nav: NavController,
    private toastService: ToastService,
    private saveService: SaveService
  ) {
    this.weight = 28;
    this.weightLbs = 62;
  }

  ngOnInit() {}

  getPounds() {
    let finalWeight: number = this.weight * 2.205;
    this.weightLbs = finalWeight.toFixed();
  }

  update() {
    this.submitted = true;

    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        if (this.weight <= 28) {
          console.log("Weight required.");
        } else {
          this.saveService.updateWeight(this.weight);
          this.toastService.presentGoodToast("Weight Set");
          this.nav.navigateBack("profile/");
        }
      }
    });
  }
}
