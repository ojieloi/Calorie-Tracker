import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { SaveService } from "../../services/save.service";
import { ToastService } from "src/app/services/toast.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  name: string;
  username: string;
  password: string;
  cpassword: string;

  submitted = false;

  constructor(
    private saveService: SaveService,
    private toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit() {}

  createAccount() {
    var email = this.username + "@calorie-tracker.io";
    this.submitted = true;

    if (
      this.name == null ||
      this.username == null ||
      this.password == null ||
      this.cpassword == null
    ) {
      console.log("Missing fields required.");
    } else if (this.password !== this.cpassword) {
      this.toastService.presentBadToast("Passwords do not match.");
    } else {
      var user = firebase
        .auth()
        .createUserWithEmailAndPassword(email, this.password);
      user
        .then((result) => {
          this.saveService.storeUserInfo(this.name);
          this.toastService.presentLoading("Creating account...");
          this.router.navigateByUrl("/physical");
          console.log("User successfully created: ", result);
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            this.toastService.presentBadToast(error.message);
          } else if (error.code === "auth/operation-not-allowed") {
            this.toastService.presentBadToast(error.message);
          } else if (error.code === "auth/weak-password") {
            this.toastService.presentBadToast(error.message);
          }
        });
    }
  }
}
