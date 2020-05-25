import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultDocComponent } from './default-doc.component';
import { DashboardDocComponent } from '../../modules/dashboard-doc/dashboard-doc.component';
import { ContentDocComponent } from './../../modules/content-doc/content-doc.component';
import {MatSidenavModule} from '@angular/material/sidenav';



@NgModule({
  declarations: [
    DefaultDocComponent,
    DashboardDocComponent,
    ContentDocComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule
  ]
})
export class DefaultDocModule { }
