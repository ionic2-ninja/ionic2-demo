/**
 * Created by zhuzhui on 2016/11/2.
 */
import {Component} from '@angular/core';
import {Router} from 'emiya-ionic2-router';
import {Token} from 'emiya-angular2-token';
import {SMSLoginPage} from '../smsLogin/smsLogin';
import {Event} from 'emiya-angular2-event';

@Component({
    templateUrl: 'login.html'
})

export class LoginPage{
    constructor(private router: Router){

    }

    goBack() {
        this.router.pop();
    }

    login() {
        Token.set('uuid','ddddd');
        Token.set('token','454545');
        Event.emit('loginSuccess',{});
    }

    goSmsLogin() {
        this.router.push(SMSLoginPage);
    }
}
