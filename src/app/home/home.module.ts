import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { IonicSelectableModule } from 'ionic-selectable';
import { AppSalesZoomComponent } from '../components/app-sales-zoom/app-sales-zoom.component';
import { ZoomContentComponent } from '../components/zoom-content/zoom-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    IonicSelectableModule
  ],
  declarations: [
    HomePage,
    AppSalesZoomComponent,
    ZoomContentComponent
  ],
  entryComponents: [
    ZoomContentComponent
  ]
})
export class HomePageModule {}
