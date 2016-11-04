import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Router} from 'emiya-ionic2-router';
import {MyPraisePage} from '../myPraise/myPraise';
import {AboutPage} from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private router: Router) {

  }

  goMyPraise() {
    this.router.push(MyPraisePage);
  }

  goMemberPage() {
    this.router.push(AboutPage);
  }

}
