import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { ToastService } from "src/app/services/toast.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.page.html",
  styleUrls: ["./signin.page.scss"],
})
export class SigninPage implements OnInit {
  username: string;
  password: string;

  submitted = false;

  constructor(private toastService: ToastService, private router: Router) {}

  ngOnInit() {}

  signIn() {
    var email = this.username + "@calorie-tracker.io";
    this.submitted = true;

    if (this.username == null || this.password == null) {
      console.log("Missing fields required.");
    } else {
      var user = firebase
        .auth()
        .signInWithEmailAndPassword(email, this.password);
      user
        .then((result) => {
          this.toastService.presentLoading("Please wait...");
          this.router.navigateByUrl("");
          console.log("User successfully signed in: ", result);
        })
        .catch((error) => {
          if (error.code === "auth/invalid-email") {
            this.toastService.presentBadToast(error.message);
          } else if (error.code === "auth/user-disabled") {
            this.toastService.presentBadToast(error.message);
          } else if (error.code === "auth/user-not-found") {
            this.toastService.presentBadToast(error.message);
          } else if (error.code === "auth/wrong-password") {
            this.toastService.presentBadToast(error.message);
          }
        });
    }
  }
}
