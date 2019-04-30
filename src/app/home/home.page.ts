import { Component } from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage {
    priceTable: any = {};
    payment: any = {};

    constructor() {}

    save() {
        console.log(this.payment);
        console.log(this.priceTable);
    }
}
