import { Component } from '@angular/core';
import { DevicesPage } from '../devices/devices';
import { ScenariosPage } from '../scenarios/scenarios';
import { RulesPage } from '../rules/rules';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DevicesPage;
  tab2Root = ScenariosPage;
  tab3Root = RulesPage;
  tab4Root = MenuPage;

  constructor() {

  }
}
