import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FitnessgoalPageRoutingModule } from './fitnessgoal-routing.module';

import { FitnessgoalPage } from './fitnessgoal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FitnessgoalPageRoutingModule
  ],
  declarations: [FitnessgoalPage]
})
export class FitnessgoalPageModule {}
