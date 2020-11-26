import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPagePageRoutingModule } from './view-page-routing.module';

import { ViewPagePage } from './view-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPagePageRoutingModule
  ],
  declarations: [ViewPagePage]
})
export class ViewPagePageModule {}
