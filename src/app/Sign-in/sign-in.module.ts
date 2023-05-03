import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { signin } from './sign-in.page';

import { SignInPageRoutingModule } from './sign-in-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SignInPageRoutingModule
  ],
  declarations: [signin]
})
export class SignInPageModule {}
