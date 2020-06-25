import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FitnesslevelPageRoutingModule } from './fitnesslevel-routing.module';

import { FitnesslevelPage } from './fitnesslevel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FitnesslevelPageRoutingModule
  ],
  declarations: [FitnesslevelPage]
})
export class FitnesslevelPageModule {}
