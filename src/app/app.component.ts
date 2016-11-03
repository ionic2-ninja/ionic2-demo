import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {Router} from 'emiya-ionic2-router';
import {Routes} from '../configs/Routes';


@Component({
  template: `<ion-nav></ion-nav>`,
  providers: [Router],
})
export class MyApp {
  // rootPage = TabsPage;

  constructor(platform: Platform, router: Router) {
    router.setVersion('Hello World',10000);
    router.load(Routes);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
