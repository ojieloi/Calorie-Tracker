import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { NavController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  name: string;
  displayPicture: string;
  height: number;
  weight: number;

  constructor(private nav: NavController, private router: Router) {
    this.getUserInfo();
    this.getPhysicalInfo();
  }

  ngOnInit() {}

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
            this.height = user.height;
            this.weight = user.weight;
          }
        });
      }
    });
  }

  async changeEmoji() {
    this.router.navigateByUrl("/newpicture");
  }

  async changeWeight() {
    this.router.navigateByUrl("/newweight");
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
