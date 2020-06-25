import { Injectable } from "@angular/core";
import * as firebase from "firebase";

@Injectable({
  providedIn: "root",
})
export class SaveService {
  constructor() {}

  async storeUserInfo(displayName: string) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var doc = firebase.firestore().collection("users").doc(user.uid);
        doc
          .set({
            displayName: displayName,
          })
          .then(() => {
            console.log("Document successfully written.");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }
    });
  }

  async storeUserEmoji(pictureUrl: string) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var doc = firebase.firestore().collection("users").doc(user.uid);
        doc
          .update({
            displayPicture: pictureUrl,
          })
          .then(() => {
            console.log("Document successfully written.");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }
    });
  }

  async storePhysicalInfo(
    age: any = new Date(),
    gender: boolean,
    height: number,
    weight: number
  ) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var doc = firebase.firestore().collection("physical").doc(user.uid);
        doc
          .set({
            age: age,
            gender: gender,
            height: height,
            weight: weight,
          })
          .then(() => {
            console.log("Document successfully written.");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }
    });
  }

  async storeFitnessLevel(level: number) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var doc = firebase.firestore().collection("fitness").doc(user.uid);
        doc
          .set({
            fitnessLevel: level,
          })
          .then(() => {
            console.log("Document successfully written.");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }
    });
  }

  async storeFitnessGoal(goal: number) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var doc = firebase.firestore().collection("fitness").doc(user.uid);
        doc
          .update({
            fitnessGoal: goal,
          })
          .then(() => {
            console.log("Document successfully written.");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }
    });
  }
}
