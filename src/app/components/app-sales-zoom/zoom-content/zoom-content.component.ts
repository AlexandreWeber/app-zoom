import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController, NavParams } from '@ionic/angular';

@Component({
    selector: 'app-zoom-content',
    templateUrl: './zoom-content.component.html',
    styleUrls: ['./zoom-content.component.scss'],
})

export class ZoomContentComponent implements OnInit {

    list: Array<any> = [];
    selectedItem: any;
    selectedItemObject: any;
    searchText: '';
    start = 0;
    end = 10;

    schema: string;
    fieldCode: '';
    fieldName: '';

    constructor(private modalCtrl: ModalController, public loadingController: LoadingController,
                public navParams: NavParams) {
    }

    ngOnInit() {
        this.schema = this.navParams.get('schema');
        this.fieldCode = this.navParams.get('fieldCode');
        this.fieldName = this.navParams.get('fieldName');
        this.selectedItem = this.navParams.get('selected');
        this.search();
    }

    setSelected(item) {
        this.selectedItemObject = item;
    }

    closeModal() {
        this.modalCtrl.dismiss();
    }

    selectItem() {
        this.modalCtrl.dismiss({
            selectedItem: this.selectedItemObject
        });
    }

    searchByName() {
        this.list = this.list.filter((item) => {
            if (item.name.indexOf(this.searchText) > -1) {
                return item;
            }
        });
    }

    async search(event?) {
        const loading = await this.loadingController.create({
            message: 'Buscando registros...',
        });

        await loading.present();

        setTimeout(() => {
            for (let i = this.start; i < this.start + this.end; i++) {
                this.list.push({
                    code: i,
                    name: `${this.schema} ${i}`
                });
            }

            this.start += 10;

            if (event) {
                event.target.complete();
            }

            loading.dismiss();
        }, 1000);
    }
}
