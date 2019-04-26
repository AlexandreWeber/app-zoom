import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ZoomContentComponent } from '../zoom-content/zoom-content.component';

@Component({
  selector: 'app-sales-zoom',
  templateUrl: './app-sales-zoom.component.html',
  styleUrls: ['./app-sales-zoom.component.scss'],
})

export class AppSalesZoomComponent implements OnInit {

  selectedItem: any = {};
  
  @Input() label: string;
  @Input() placeHolder: string;
  @Input() schema: string;
  
  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async openModal () {
    const modal = await this.modalController.create({
      component: ZoomContentComponent,
      componentProps: {
        schema: this.schema
      }
    });

    modal.present();

    const item = await modal.onDidDismiss();

    if (item && item.data) {
      this.selectedItem = item.data.selectedItem;
    }
    console.log(this.selectedItem);

  };

}
