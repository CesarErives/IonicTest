import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DmwPageRoutingModule } from './dmw-routing.module';

import { DmwPage } from './dmw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DmwPageRoutingModule
  ],
  declarations: [DmwPage]
})
export class DmwPageModule {}
