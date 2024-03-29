import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  signUp() {
    this.router.navigateByUrl("/signup");
  }

  signIn() {
    this.router.navigateByUrl("/signin");
  }

}
