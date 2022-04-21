import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignUpPage } from './signup.page';
import { Step1Page } from './Step1/step1-page';
import { SignUpPageRoutingModule } from './signup.routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SignUpPageRoutingModule
  ],
  declarations: [SignUpPage,Step1Page]
})
export class SignUpPageModule {}
