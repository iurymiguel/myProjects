import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScenariosPage } from './scenarios';

@NgModule({
  declarations: [
    ScenariosPage,
  ],
  imports: [
    IonicPageModule.forChild(ScenariosPage),
  ],
})
export class ScenariosPageModule {}
