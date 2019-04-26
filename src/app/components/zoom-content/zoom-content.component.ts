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
  
  searchText: '';

  start = 0;

  end = 10;

  constructor(private modalCtrl: ModalController, public loadingController: LoadingController, public navParams: NavParams) { 
    console.log(navParams.get('schema'))
  }

  ngOnInit() {
    this.search();
  }

  closeModal () {
    this.modalCtrl.dismiss();
  }

  seclectItem () {
    console.log(this.selectedItem);

    this.modalCtrl.dismiss({
      selectedItem: this.selectedItem
    })
  }

  searchByName () {
    this.list = this.list.filter((item) => {
      console.log(item.name.indexOf(this.searchText));
      if (item.name.indexOf(this.searchText) > -1) {
        return item;
      }
    });
  };

  async search (event?) {
    const loading = await this.loadingController.create({
      message: 'Buscando registros...',
    });

    await loading.present();

    setTimeout(() => {

      for (let i = this.start; i < this.start + this.end; i++) {
        this.list.push({
          code: i,
          name: `Condição de pagamento  ${i}`
        })
      }

      this.start += 10;
      if (event) {
        event.target.complete();
      }
      loading.dismiss();
    }, 1000)

  }
}
