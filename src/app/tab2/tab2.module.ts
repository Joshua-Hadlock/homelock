import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { Badge } from '@awesome-cordova-plugins/badge/ngx';
import { TextToSpeechAdvanced } from '@awesome-cordova-plugins/text-to-speech-advanced/ngx';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { HomeDetailsPageModule } from './homedetails/homedetails.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    HomeDetailsPageModule
  ],
  declarations: [Tab2Page],
  providers: [Badge, TextToSpeechAdvanced]
})
export class Tab2PageModule {}
