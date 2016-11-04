import { Component } from '@angular/core';
import {Router} from 'emiya-ionic2-router';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,private router: Router) {

  }

  goBack() {
    this.router.pop();
  }

}
