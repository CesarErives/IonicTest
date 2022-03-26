import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DmwPage } from './dmw.page';

const routes: Routes = [
  {
    path: '',
    component: DmwPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DmwPageRoutingModule {}
