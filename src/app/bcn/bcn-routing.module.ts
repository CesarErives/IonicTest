import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BcnPage } from './bcn.page';

const routes: Routes = [
  {
    path: '',
    component: BcnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BcnPageRoutingModule {}
