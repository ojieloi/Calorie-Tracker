import { Component } from "@angular/core";
import * as firebase from "firebase";
import { NavController, ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { AddmealPage } from "../modals/addmeal/addmeal.page";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  day: any;
  bmi: number;
  bmiMessage: string;

  name: string;
  displayPicture: string;

  constructor(
    private nav: NavController,
    private router: Router,
    private modalController: ModalController
  ) {
    this.getUserInfo();
    this.getPhysicalInfo();
    this.getDay();
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("A user is signed in.");
      } else {
        console.log("No user is signed in.");
        this.nav.navigateBack("signin");
      }
    });
  }

  async profile() {
    firebase.auth().onAuthStateChanged((user) => {
      var userId;
      if (user != null) {
        userId = user.uid;
      }
      this.router.navigateByUrl(`/profile/${userId}`);
    });
  }

  async addMeal() {
    const modal = await this.modalController.create({
      component: AddmealPage,
    });
    return await modal.present();
  }

  async getDay() {
    var weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var today = new Date();
    var wd = weekday[today.getDay()];
    var mon = month[today.getMonth()];
    this.day = wd + ", " + mon + " " + today.getDate();
  }

  async getUserInfo() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        var doc = firebase.firestore().collection("users").doc(user.uid);
        doc.get().then((doc) => {
          if (doc.exists) {
            const user = doc.data();

            // Binding user data to elements
            this.name = user.displayName;
            this.displayPicture = user.displayPicture;
          }
        });
      }
    });
  }

  async getPhysicalInfo() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        var doc = firebase.firestore().collection("physical").doc(user.uid);
        doc.get().then((doc) => {
          if (doc.exists) {
            const user = doc.data();

            // Binding user data to elements
            var birth = user.age;
            var gender = user.gender;
            var height = user.height;
            var weight = user.weight;

            // Calculate user's BMI
            this.calculateBMI(birth, gender, height, weight);
          }
        });
      }
    });
  }

  async calculateBMI(
    birth: any = new Date(),
    gender: boolean,
    height: number,
    weight: number
  ) {
    // Calculating the user's BMI
    if (weight > 0 && height > 0) {
      let finalBMI = 0;
      let finalHeight = (height / 100) * (height / 100);
      finalBMI += weight / finalHeight;
      this.bmi = parseFloat(finalBMI.toFixed(1));

      // BMI message to be displayed
      if (this.bmi < 18.5) {
        this.bmiMessage = "This indicates an underweight health.";
      } else if (this.bmi >= 18.5 && this.bmi <= 24.9) {
        this.bmiMessage = "This indicates a good health.";
      } else if (this.bmi >= 25 && this.bmi <= 29.9) {
        this.bmiMessage = "This indicates an overweight health.";
      } else {
        this.bmiMessage = "This indicates an obese health.";
      }
    }
  }
}
