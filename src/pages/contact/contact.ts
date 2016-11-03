import { Component } from '@angular/core';
import {Router} from 'emiya-ionic2-router';
import {MyPraisePage} from '../myPraise/myPraise';
import {Token} from 'emiya-angular2-token';
import {Event} from 'emiya-angular2-event';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public hasUuid:any;
  constructor(private router: Router) {
    this.getEvent();
  }

  ionViewDidEnter(){
    this.hasUuid = Token.has('uuid');
  }

  goMyPraise() {
    this.router.push(MyPraisePage);
  }

  goIonic2() {
    this.router.push('/agreement');
  }

  logout() {
    Token.clearAll();
    this.hasUuid = false;
  }

  getEvent() {
    Event.subscribe('loginSuccess',this.show.bind(this));
  }

  show() {
    this.hasUuid = Token.has('uuid');
  }


}
