import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewweightPage } from './newweight.page';

const routes: Routes = [
  {
    path: '',
    component: NewweightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewweightPageRoutingModule {}
