import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeDetailPageRoutingModule } from './homedetails-routing.module';
import { HomedetailsPage } from './homedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeDetailPageRoutingModule
  ],
  declarations: [HomedetailsPage]
})
export class HomeDetailsPageModule {}