import { ConsultationhistoryComponent } from './patientpages/consultationhistory/consultationhistory.component';
import { MyprovidersComponent } from './patientpages/myproviders/myproviders.component';
import { HealthrecordsComponent } from './patientpages/healthrecords/healthrecords.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FirstPageComponent } from './first-page/first-page.component';
import { pathToFileURL } from 'url';
import { LoginComponentComponent } from './auth/login-component/login-component.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { AdminComponent } from './admin/admin.component';
import { PatientHomeComponent } from './patient-home-navibar/patient-home.component';
import { PatientDefaultPageComponent } from './patient-default-page/patient-default-page.component';


import { HealthprofileComponent } from './patientpages/healthprofile/healthprofile.component';
import { AppoinmentsComponent } from './patientpages/appoinments/appoinments.component';
import { WhatwetreatComponent } from './whatwetreat/whatwetreat.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { OurproviersComponent } from './ourproviers/ourproviers.component';
import { ManageDoctorComponent } from './manage-doctor/manage-doctor.component';
import { ManagePatientComponent } from './manage-patient/manage-patient.component';

  //doctor's component
import { DefaultDocComponent } from './doctor/layouts/default-doc/default-doc.component';
import { DashboardDocComponent } from './doctor/modules/dashboard-doc/dashboard-doc.component';
import { ContentDocComponent } from './doctor/modules/content-doc/content-doc.component';
import { UpdateAccountDocComponent } from './doctor/modules/update-account-doc/update-account-doc.component';
import { AppointmentDocComponent } from './doctor/modules/appointment-doc/appointment-doc.component';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/home' ,pathMatch:'full'},
  { path:'login', component: LoginComponentComponent },
  {path:'home',component:FirstPageComponent},
  {path:'joinnow', component:RegisterComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'howitworks', component:HowItWorksComponent},
  {path:'admin', component:AdminComponent,
  children:[
      { path:'manage-doctor', component: ManageDoctorComponent},
      { path:'manage-patient', component: ManagePatientComponent}
    ]
  },
  {path:'manage-doctor', component: ManageDoctorComponent},
  { path:'manage-patient', component: ManagePatientComponent},
  {path:'patientHome',component:PatientDefaultPageComponent},
  {path:'healthprofile',component:HealthprofileComponent},
  {path:'appoinments',component:AppoinmentsComponent},
  {path:'healthrecords',component:HealthrecordsComponent},
  {path:'myproviders',component:MyprovidersComponent},
  {path:'consultationhistory',component:ConsultationhistoryComponent},
  {path:'whatwetreat', component:WhatwetreatComponent},
  {path:'forgotpass',component:ForgotpassComponent},
  {path:'ourproviders',component:OurproviersComponent},
 
  

  //doctor's paths

  {path:'',component:DefaultDocComponent,
  children: [{ path :'docHome', component:DashboardDocComponent},
            { path : 'contentDoc' , component : ContentDocComponent},
            {path:'updateAccount',component:UpdateAccountDocComponent},
            {path:'appointments',component:AppointmentDocComponent},
 ]
},


  {path:"**",component:PageNotFoundComponent},
  

  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  PatientHomeComponent,
  PageNotFoundComponent,
  PatientDefaultPageComponent,
  LoginComponentComponent,
  HealthprofileComponent,
  AppoinmentsComponent
    
];
