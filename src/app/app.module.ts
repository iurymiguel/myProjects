import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DevicesPage } from '../pages/devices/devices';
import { ScenariosPage } from '../pages/scenarios/scenarios';
import { RulesPage } from '../pages/rules/rules';
import { MenuPage } from '../pages/menu/menu';
import { PopoverPageModule } from '../pages/popover/popover.module';

@NgModule({
  declarations: [
    MyApp,
    DevicesPage,
    ScenariosPage,
    RulesPage,
    MenuPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PopoverPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DevicesPage,
    ScenariosPage,
    RulesPage,
    MenuPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
