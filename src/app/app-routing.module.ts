import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FirstPageComponent } from './first-page/first-page.component';
import { pathToFileURL } from 'url';
import { LoginComponentComponent } from './auth/login-component/login-component.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PatientHomeComponent } from './patient-home-navibar/patient-home.component';
import { PatientDefaultPageComponent } from './patient-default-page/patient-default-page.component';
import { DefaultDocComponent } from './doctor/layouts/default-doc/default-doc.component';
import { DashboardDocComponent } from './doctor/modules/dashboard-doc/dashboard-doc.component';
import { ContentDocComponent } from './doctor/modules/content-doc/content-doc.component';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WhatwetreatComponent } from './whatwetreat/whatwetreat.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { OurproviersComponent } from './ourproviers/ourproviers.component';


const routes: Routes = [
  {path:'',redirectTo:'/home' ,pathMatch:'full'},
  { path:'login', component: LoginComponentComponent },
  {path:'home',component:FirstPageComponent},
  {path:'joinnow', component:RegisterComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'howitworks', component:HowItWorksComponent},
  {path:'patientHome',component:PatientDefaultPageComponent},

  {path:'whatwetreat', component:WhatwetreatComponent},
  {path:'forgotpass',component:ForgotpassComponent},
  {path:'ourproviders',component:OurproviersComponent},
  {path:"**",component:PageNotFoundComponent},
  

  //doctor's modules

  {path:'',component:DefaultDocComponent,
  children: [{ path :'docHome', component:DashboardDocComponent},
            { path : 'contentDoc' , component : ContentDocComponent},
            {path:'tets',component:FirstPageComponent},
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
  LoginComponentComponent
];
