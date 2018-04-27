import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController, reorderArray  } from 'ionic-angular';
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
            {
                name: 'Regra 1',
                expanded: false
            },
            {
                name: 'Regra 2',
                expanded: false
            },
            {
                name: 'Regra 3',
                expanded: false
            },
            {
                name: 'Regra 4',
                expanded: false
            },
            {
                name: 'Regra 5',
                expanded: false
            },
            {
                name: 'Regra 6',
                expanded: false
            },
            {
                name: 'Regra 7',
                expanded: false
            },
            {
                name: 'Regra 8',
                expanded: false
            },
            {
                name: 'Regra 9',
                expanded: false
            }
        ];

    }

    reorderItems(indexes) {
        this.items = reorderArray(this.items, indexes);
    }


    expandItem(item) {
        item.expanded = !item.expanded;
    }

    presentPopover(event) {
        let popover = this.popoverCtrl.create(PopoverPage);
        popover.present({
            ev: event
        });
    }

}
