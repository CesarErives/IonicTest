import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QpcPageRoutingModule } from './qpc-routing.module';

import { QpcPage } from './qpc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QpcPageRoutingModule
  ],
  declarations: [QpcPage]
})
export class QpcPageModule {}
