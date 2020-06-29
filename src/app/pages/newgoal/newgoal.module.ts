import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewgoalPageRoutingModule } from './newgoal-routing.module';

import { NewgoalPage } from './newgoal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewgoalPageRoutingModule
  ],
  declarations: [NewgoalPage]
})
export class NewgoalPageModule {}
