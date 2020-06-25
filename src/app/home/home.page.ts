import { Component } from "@angular/core";
import * as firebase from "firebase";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  bmi: number;
  bmiMessage: string;

  name: string;

  constructor(private nav: NavController) {
    this.getUserInfo();
    this.getPhysicalInfo();
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

  async getUserInfo() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        var doc = firebase.firestore().collection("users").doc(user.uid);
        doc.get().then((doc) => {
          if (doc.exists) {
            const user = doc.data();

            // Binding user data to elements
            this.name = user.displayName;
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

  async signOut() {
    var user = firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("User is signing out: ", user);
        this.nav.navigateBack("signin");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
