import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FitnessgoalPage } from './fitnessgoal.page';

const routes: Routes = [
  {
    path: '',
    component: FitnessgoalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FitnessgoalPageRoutingModule {}
