/**
 * Created by zhuzhui on 2016/11/2.
 */

import {Component} from '@angular/core';
import {Router} from 'emiya-ionic2-router';
import {PopoverController,ViewController} from 'ionic-angular';

@Component({
    templateUrl: 'myPraise.html',
})

export class MyPraisePage{
    constructor(private router: Router,private popoverCtrl: PopoverController){

    }

    goBack() {
        this.router.pop();
    }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage,{},{cssClass:'popover-style',enableBackdropDismiss:false});
    popover.present({
      ev: myEvent
    }).then(() => {
      document.getElementsByTagName('ion-backdrop')[0]['onclick'] = () => {
        popover.dismiss(undefined, undefined, {duration: 0, animate: false})
      }
    });
  }
}


@Component({
  templateUrl:'../dateTime/dateTime.html',
//   template: `
//     <div class="mypraise-style-one">
//     <div>
//     <span>发行年份</span>
//     <select class="input-box">
//   <option value ="volvo">Volvo</option>
//   <option value ="saab">Saab</option>
//   <option value="opel">Opel</option>
//   <option value="audi">Audi</option>
// </select>
// </div>
//   <div>
//     <span>类别检索</span>
//     <select class="input-box">
//   <option value ="volvo">Volvo</option>
//   <option value ="saab">Saab</option>
//   <option value="opel">Opel</option>
//   <option value="audi">Audi</option>
// </select>
// </div>
// <div>
// <span>文&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</span>
// <input type="text" class="input-box">
// </div>
// <div>
// <span>标题正文</span>
// <input type="text" class="input-box">
// </div>
// </div>
// <div class="mypraise-style-one mypraise-style-two">
// <div>
// <span>文件类别</span>
// </div>
// <div class="item">
// <span><input type="checkbox">发展改革委令</span>
// <span><input type="checkbox">公告</span>
// <span><input type="checkbox">公告</span>
// </div>
// <div class="item">
// <span><input type="checkbox">规划文本</span>
// <span><input type="checkbox">通知</span>
// <span><input type="checkbox">解读</span>
// </div>
// <div class="item">
// <span><input type="checkbox">其他</span>
// </div>
// </div>
// <div class="mypraise-confirm" style="padding: 0!important;">
// <ion-item>
//   <ion-label>日期</ion-label>
//   <ion-datetime displayFormat="YYYY/M/D " [(ngModel)]="myDate" cancelText="取消" doneText="确定" style="width: 75px;padding: 12px 0"></ion-datetime>
// </ion-item>
// <ion-item>
// <ion-label>--</ion-label>
// <ion-datetime displayFormat="YYYY/M/D" [(ngModel)]="myDate1" cancelText="取消" doneText="确定" style="width: 75px;padding: 12px 0"></ion-datetime>
// </ion-item>
// <div class="confirm-button">
// <span>重置</span>
// <span (click)="close()">保存</span>
// </div>
// </div>
//
//   `
})

export class PopoverPage {
  constructor(public viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss(undefined, undefined, {duration: 0, animate: false});
  }
}
