import { Component, OnInit } from "@angular/core";
import { ToastService } from "src/app/services/toast.service";
import { SaveService } from "src/app/services/save.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-emoji",
  templateUrl: "./emoji.page.html",
  styleUrls: ["./emoji.page.scss"],
})
export class EmojiPage implements OnInit {
  constructor(
    private saveService: SaveService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit() {}

  setLion() {
    let pictureUrl = "Lion@3x.png";
    this.saveService.storeUserEmoji(pictureUrl);
    this.router.navigateByUrl("");
    this.toastService.presentLoading("Getting things ready...");
    // console.log("Lion selected");
  }

  setZebra() {
    let pictureUrl = "Zebra@3x.png";
    this.saveService.storeUserEmoji(pictureUrl);
    this.router.navigateByUrl("");
    this.toastService.presentLoading("Getting things ready...");
    // console.log("Zebra selected");
  }

  setSkull() {
    let pictureUrl = "Skull@3x.png";
    this.saveService.storeUserEmoji(pictureUrl);
    this.router.navigateByUrl("");
    this.toastService.presentLoading("Getting things ready...");
    // console.log("Skull selected");
  }

  setOwl() {
    let pictureUrl = "Owl@3x.png";
    this.saveService.storeUserEmoji(pictureUrl);
    this.router.navigateByUrl("");
    this.toastService.presentLoading("Getting things ready...");
    // console.log("Owl selected");
  }
}
