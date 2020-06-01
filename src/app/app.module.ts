import { ServiceService } from './patientpages/services/service.service';
import { DefaultDocModule } from './doctor/layouts/default-doc/default-doc.module';
import { AuthService } from './auth/auth.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainNavigationBarComponent } from './main-navigation-bar/main-navigation-bar.component';
import { LoginComponentComponent } from './auth/login-component/login-component.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { PagemenuComponent } from './patientpages/pagemenu/pagemenu.component';
import { HealthrecordsComponent } from './patientpages/healthrecords/healthrecords.component';
import { MyprovidersComponent } from './patientpages/myproviders/myproviders.component';
import { ConsultationhistoryComponent } from './patientpages/consultationhistory/consultationhistory.component';
import { AllergierecordsComponent } from './patientpages/allergierecords/allergierecords.component';
import { MedicationComponent } from './patientpages/medication/medication.component';
import { UploadrecordsComponent } from './patientpages/uploadrecords/uploadrecords.component';
import {MatButtonModule} from '@angular/material/button';


import { AdminComponent } from './admin/admin.component';

import { WhatwetreatComponent } from './whatwetreat/whatwetreat.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { OurproviersComponent } from './ourproviers/ourproviers.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageDoctorComponent } from './manage-doctor/manage-doctor.component';
import { ManagePatientComponent } from './manage-patient/manage-patient.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    MainFooterComponent,
    MainNavigationBarComponent,
    LoginComponentComponent,
    RegisterComponent,
    ContactusComponent,
    HowItWorksComponent,
    routingComponents,
    PagemenuComponent,
    HealthrecordsComponent,
    MyprovidersComponent,
    ConsultationhistoryComponent,
    AllergierecordsComponent,
    MedicationComponent,
    UploadrecordsComponent,
    AdminComponent,
    WhatwetreatComponent,
    ForgotpassComponent,
    OurproviersComponent,
    ManageDoctorComponent,
    ManagePatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,"hello"),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    FormsModule, BrowserAnimationsModule,
    DefaultDocModule,
    MatButtonModule
  ],
  providers: [
    AuthService,
    ServiceService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
