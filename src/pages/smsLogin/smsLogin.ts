/**
 * Created by zhuzhui on 2016/11/3.
 */

import {Component} from '@angular/core';
import {Router} from 'emiya-ionic2-router';
import {Token} from 'emiya-angular2-token';
import {Event} from 'emiya-angular2-event';

@Component({
    templateUrl: 'smsLogin.html'
})

export class SMSLoginPage{
    constructor(private router: Router){

    }

    goBack() {
        this.router.pop();
    }

    smsLogin() {
        Token.set('uuid','ddddd');
        Token.set('token','454545');
        Event.emit('loginSuccess',{});
    }
}