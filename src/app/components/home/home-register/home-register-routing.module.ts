import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRegisterComponent } from './home-register.component';

const routes: Routes = [{ path: '', component: HomeRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRegisterRoutingModule { }
