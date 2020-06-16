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
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';


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
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule
    
  ],
  providers: [UpdateProfileService]

})
export class DefaultDocModule { }
