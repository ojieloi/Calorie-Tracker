import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewweightPageRoutingModule } from './newweight-routing.module';

import { NewweightPage } from './newweight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewweightPageRoutingModule
  ],
  declarations: [NewweightPage]
})
export class NewweightPageModule {}
