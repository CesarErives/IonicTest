import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BcnPageRoutingModule } from './bcn-routing.module';

import { BcnPage } from './bcn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BcnPageRoutingModule
  ],
  declarations: [BcnPage]
})
export class BcnPageModule {}
