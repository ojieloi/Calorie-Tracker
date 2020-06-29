import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewpicturePage } from './newpicture.page';

const routes: Routes = [
  {
    path: '',
    component: NewpicturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewpicturePageRoutingModule {}
