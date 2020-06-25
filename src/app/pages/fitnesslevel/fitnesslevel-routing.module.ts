import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FitnesslevelPage } from './fitnesslevel.page';

const routes: Routes = [
  {
    path: '',
    component: FitnesslevelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FitnesslevelPageRoutingModule {}
