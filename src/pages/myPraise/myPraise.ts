/**
 * Created by zhuzhui on 2016/11/2.
 */

import {Component} from '@angular/core';
import {Router} from 'emiya-ionic2-router';

@Component({
    templateUrl: 'myPraise.html',
})

export class MyPraisePage{
    constructor(private router: Router){

    }

    goBack() {
        this.router.pop();
    }
}