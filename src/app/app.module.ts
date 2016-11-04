import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AgreementPage} from '../pages/agreement/agreement';
import {LoginPage} from '../pages/login/login';
import {MyPraisePage} from '../pages/myPraise/myPraise';
import {SMSLoginPage} from '../pages/smsLogin/smsLogin';
import {PopoverPage} from '../pages/myPraise/myPraise';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AgreementPage,
    LoginPage,
    MyPraisePage,
    SMSLoginPage,
    PopoverPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AgreementPage,
    LoginPage,
    MyPraisePage,
    SMSLoginPage,
    PopoverPage
  ],
  providers: []
})
export class AppModule {}
