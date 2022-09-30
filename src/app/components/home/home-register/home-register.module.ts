import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRegisterRoutingModule } from './home-register-routing.module';
import { HomeRegisterComponent } from './home-register.component';


@NgModule({
  declarations: [
    HomeRegisterComponent
  ],
  imports: [
    CommonModule,
    HomeRegisterRoutingModule
  ]
})
export class HomeRegisterModule { }
