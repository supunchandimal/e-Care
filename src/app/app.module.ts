import { AccountService } from './patientpages/services/account.service';
import { ServiceService } from './patientpages/services/service.service';
import { DefaultDocModule } from './doctor/layouts/default-doc/default-doc.module';
import { DefaultAdminModule } from './admin02/layouts/default-admin/default-admin.module';

import { AuthService } from './auth/auth.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';


import {MatTabsModule} from '@angular/material/tabs';

import {
  AngularFireStorageReference,
  AngularFireUploadTask,
} from "@angular/fire/storage";
import { ImageCropperModule,} from 'ngx-image-cropper';


import { WhatwetreatComponent } from './whatwetreat/whatwetreat.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { OurproviersComponent } from './ourproviers/ourproviers.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageDoctorComponent } from './manage-doctor/manage-doctor.component';
import { ManageDoctorService } from 'src/services/shared/manage-doctor.service';
import { ManagePatientComponent } from './manage-patient/manage-patient.component';
import { ManagePatientService } from 'src/services/shared/manage-patient.service';
import { PatientDeleteDialogComponent } from './manage-patient/patient-delete-dialog/patient-delete-dialog.component';
import { PatientDeleteDialogService } from 'src/services/shared/patient-delete-dialog.service';
import { ViewDoctorComponent } from './manage-doctor/view-doctor/view-doctor.component';

import { AdminFeedbacksComponent } from './admin-feedbacks/admin-feedbacks.component';
import { DropzoneDirective } from './patientpages/patientfiles/dropzone.directive';
import { UploaderComponent } from './patientpages/patientfiles/uploader/uploader.component';
import { UploadTaskComponent } from './patientpages/patientfiles/upload-task/upload-task.component';

import { BehaviorhistoryComponent } from './patientpages/behaviorhistory/behaviorhistory.component';
import { FamilyhistoryComponent } from './patientpages/familyhistory/familyhistory.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {TextFieldModule} from '@angular/cdk/text-field';

import { AdminComponent } from './admin/admin.component';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './material/material.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MyaccountComponent } from './patientpages/myaccount/myaccount.component';
import { PpicComponent } from './patientpages/myaccount/ppic/ppic.component';
import { UploadererppicComponent } from './patientpages/myaccount/uploadererppic/uploadererppic.component';
import { AdminAnnouncementComponent } from './admin-announcement/admin-announcement.component';
import { PasswordComponent } from './patientpages/myaccount/password/password.component';
import { PpicService } from './patientpages/services/ppic.service';

import { MatNativeDateModule } from '@angular/material/core';
import { environment } from 'src/environments/environment';
import { NgxAgoraModule } from 'ngx-agora';

import { VconferenceComponent } from './video/vconference/vconference.component';
import { ConditionsService } from './patientpages/services/conditions.service';
import { OpoService } from './patientpages/services/opo.service';
import { ConditionsComponent } from './patientpages/conditions/conditions.component';
import { SurgeriesComponent } from './patientpages/surgeries/surgeries.component';
import { MessagesComponent } from './patientpages/messages/messages.component'
import { HelpComponent } from './patientpages/help/help.component';
import { AdminPaymentdetailsComponent } from './admin-paymentdetails/admin-paymentdetails.component';
import { AdminGraphComponent } from './admin/admin-graph/admin-graph.component';
import { PayhereComponent } from './patientpages/payhere/payhere.component';
import { BookedComponent } from './patientpages/appoinments/booked/booked.component';

import { DocvComponent } from './video/docv/docv.component';
import { PaymentSuccessComponent } from './patientpages/payment-success/payment-success.component';
import { PaymentFailedComponent } from './patientpages/payment-failed/payment-failed.component';




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
    ManagePatientComponent,
    
    AdminFeedbacksComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    BehaviorhistoryComponent,
    FamilyhistoryComponent,
    MyaccountComponent,
    PpicComponent,
    UploadererppicComponent,

    AdminAnnouncementComponent,

    PasswordComponent,
    VconferenceComponent,

    ConditionsComponent,

    SurgeriesComponent,
    PatientDeleteDialogComponent,
    MessagesComponent,
    HelpComponent,
    AdminPaymentdetailsComponent,
    AdminGraphComponent,
    ViewDoctorComponent,
    PayhereComponent,
    BookedComponent,
   
    DocvComponent,
   
    PaymentSuccessComponent,
   
    PaymentFailedComponent,

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
    MatProgressSpinnerModule,
    MatButtonModule,
    MatRadioModule,
    MatSliderModule,
    MaterialModule,
    TextFieldModule,

    MatTabsModule,

    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    ImageCropperModule,
    DefaultAdminModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxAgoraModule.forRoot({ AppID: environment.agora.appId }) ,
  ],
  providers: [
    AuthService,
    ServiceService ,
    ManageDoctorService,
    ManagePatientService,
    PatientDeleteDialogService,
    AccountService,
    PpicService,
    MatDatepickerModule,
    ConditionsService,
    OpoService

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
