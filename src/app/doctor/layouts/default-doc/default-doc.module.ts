import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultDocComponent } from './default-doc.component';
import { DashboardDocComponent } from '../../modules/dashboard-doc/dashboard-doc.component';
import { ContentDocComponent } from './../../modules/content-doc/content-doc.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UpdateAccountDocComponent } from './../../modules/update-account-doc/update-account-doc.component';
import {MatInputModule} from '@angular/material/input';
import { AppointmentDocComponent } from './../../modules/appointment-doc/appointment-doc.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UpdateProfileService } from './../../services/update-profile.service';



@NgModule({
  declarations: [
    DefaultDocComponent,
    DashboardDocComponent,
    ContentDocComponent,
    UpdateAccountDocComponent,
    AppointmentDocComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule,

    
  ],
  providers: [UpdateProfileService]

})
export class DefaultDocModule { }
