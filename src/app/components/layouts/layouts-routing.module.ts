import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';

const routes: Routes = [
  { 
    path: '', 
    component: LayoutsComponent,
    children: [
      { 
        path: 'home', 
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule) 
      },
      { 
        path: 'about', 
        loadChildren: () => import('../about/about.module').then(m => m.AboutModule) 
      },
      { 
        path: 'contact', 
        loadChildren: () => import('../../contact/contact.module').then(m => m.ContactModule) 
      },
    ]
   },
  
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
