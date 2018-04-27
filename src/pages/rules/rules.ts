import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
/**
 * Generated class for the RulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rules',
  templateUrl: 'rules.html',
})
export class RulesPage {

  items: any = [];
    itemExpandHeight: number = 100;
 
    constructor(public navCtrl: NavController, private popoverCtrl: PopoverController) {
 
        this.items = [
            {expanded: false},
            {expanded: false},
            {expanded: false},
            {expanded: false},
            {expanded: false},
            {expanded: false},
            {expanded: false},
            {expanded: false},
            {expanded: false}
        ];
 
    }
 
    expandItem(item){
 
        this.items.map((listItem) => {
 
            if(item == listItem){
                listItem.expanded = !listItem.expanded;
            } else {
                listItem.expanded = false;
            }
 
            return listItem;
 
        });
 
    }

  presentPopover(event){
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: event
    });
  }

}
