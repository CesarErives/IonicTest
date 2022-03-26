import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QpcPage } from './qpc.page';

const routes: Routes = [
  {
    path: '',
    component: QpcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QpcPageRoutingModule {}
