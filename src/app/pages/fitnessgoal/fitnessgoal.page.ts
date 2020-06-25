import { Component, OnInit } from "@angular/core";
import { SaveService } from "src/app/services/save.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-fitnessgoal",
  templateUrl: "./fitnessgoal.page.html",
  styleUrls: ["./fitnessgoal.page.scss"],
})
export class FitnessgoalPage implements OnInit {
  constructor(private saveService: SaveService, private router: Router) {}

  ngOnInit() {}

  setLose() {
    let goal = 1;
    this.saveService.storeFitnessGoal(goal);
    this.router.navigateByUrl("/emoji");
    // console.log("Lose weight selected, goal : ", goal);
  }

  setGain() {
    let goal = 3;
    this.saveService.storeFitnessGoal(goal);
    this.router.navigateByUrl("/emoji");
    // console.log("Gain weight selected, goal : ", goal);
  }

  setFit() {
    let goal = 2;
    this.saveService.storeFitnessGoal(goal);
    this.router.navigateByUrl("/emoji");
    // console.log("Be fit and healthy selected, goal : ", goal);
  }
}
