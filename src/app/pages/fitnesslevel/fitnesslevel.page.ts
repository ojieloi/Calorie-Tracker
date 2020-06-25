import { Component, OnInit } from "@angular/core";
import { SaveService } from "src/app/services/save.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-fitnesslevel",
  templateUrl: "./fitnesslevel.page.html",
  styleUrls: ["./fitnesslevel.page.scss"],
})
export class FitnesslevelPage implements OnInit {
  constructor(private saveService: SaveService, private router: Router) {}

  ngOnInit() {}

  setNever() {
    let level = 1.2;
    this.saveService.storeFitnessLevel(level);
    this.router.navigateByUrl("/fitnessgoal");
    // console.log("Never selected, level : ", level);
  }

  setSometimes() {
    let level = 1.375;
    this.saveService.storeFitnessLevel(level);
    this.router.navigateByUrl("/fitnessgoal");
    // console.log("Sometimes selected, level : ", level);
  }

  setModerately() {
    let level = 1.55;
    this.saveService.storeFitnessLevel(level);
    this.router.navigateByUrl("/fitnessgoal");
    // console.log("Moderately selected, level : ", level);
  }

  setDaily() {
    let level = 1.725;
    this.saveService.storeFitnessLevel(level);
    this.router.navigateByUrl("/fitnessgoal");
    // console.log("Daily selected, level : ", level);
  }
}
