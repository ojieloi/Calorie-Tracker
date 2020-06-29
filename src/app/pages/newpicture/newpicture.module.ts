import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewpicturePageRoutingModule } from './newpicture-routing.module';

import { NewpicturePage } from './newpicture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewpicturePageRoutingModule
  ],
  declarations: [NewpicturePage]
})
export class NewpicturePageModule {}
