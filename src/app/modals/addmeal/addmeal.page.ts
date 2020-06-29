import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import * as firebase from "firebase";
import { SaveService } from "src/app/services/save.service";
import { ToastService } from "src/app/services/toast.service";

@Component({
  selector: "app-addmeal",
  templateUrl: "./addmeal.page.html",
  styleUrls: ["./addmeal.page.scss"],
})
export class AddmealPage implements OnInit {
  name: string;
  category: string;
  portion: number;
  calorie: number;

  submitted = false;

  constructor(
    private modalController: ModalController,
    private saveService: SaveService,
    private toastService: ToastService
  ) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  async add() {
    this.submitted = true;
    if (
      this.name == null ||
      this.category == null ||
      this.portion == null ||
      this.calorie == null
    ) {
      console.log("Required field missing");
    } else {
      this.saveService.add(
        this.name,
        this.category,
        this.portion,
        this.calorie
      );
      this.toastService.presentGoodToast("Meal Added");
    }
  }
}
