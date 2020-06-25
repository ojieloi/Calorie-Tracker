import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhysicalPage } from './physical.page';

const routes: Routes = [
  {
    path: '',
    component: PhysicalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhysicalPageRoutingModule {}
