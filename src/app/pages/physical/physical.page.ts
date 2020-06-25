import { Component, OnInit } from "@angular/core";
import { SaveService } from "src/app/services/save.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-physical",
  templateUrl: "./physical.page.html",
  styleUrls: ["./physical.page.scss"],
})
export class PhysicalPage implements OnInit {
  birth: any;
  gender: boolean;
  height: number;
  heightFI: any;

  weight: number;
  weightLbs: any;

  submitted = false;

  constructor(private saveService: SaveService, private router: Router) {
    this.height = 137;
    this.heightFI = 4.5;

    this.weight = 28;
    this.weightLbs = 62;
  }

  ngOnInit() {}

  getFeet() {
    let finalHeight: number = this.height / 30.48;
    this.heightFI = finalHeight.toFixed(1);
  }

  getPounds() {
    let finalWeight: number = this.weight * 2.205;
    this.weightLbs = finalWeight.toFixed();
  }

  savePhysical() {
    this.submitted = true;

    if (this.birth == null) {
      console.log("Date of birth required.");
    } else if (this.gender == null) {
      console.log("Gender required.");
    } else if (this.height == null) {
      console.log("Height required.");
    } else if (this.weight == null) {
      console.log("Weight required.");
    } else {
      this.saveService.storePhysicalInfo(
        this.birth,
        this.gender,
        this.height,
        this.weight
      );
      this.router.navigateByUrl("/fitnesslevel");
    }
  }
}
