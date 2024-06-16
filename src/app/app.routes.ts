import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LeadComponent } from './lead/lead.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LifeInsuranceComponent } from './life-insurance/life-insurance.component';
import { HealthInsuranceComponent } from './health-insurance/health-insurance.component';
import { GeneralInsuranceComponent } from './general-insurance/general-insurance.component';


export const routes: Routes = [

    
    {path:'home', component:HomeComponent},
    {path:'navbar', component:NavbarComponent},
    {path:'login', component:LoginComponent},
    {path:'register' ,component:RegisterComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'conatctus',component:ContactusComponent},
    {path:'lead',component:LeadComponent},
    {path:'admin',component:AdminComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'life-insurance',component:LifeInsuranceComponent},
    {path:'health-insurance',component:HealthInsuranceComponent},
    {path:'general-insurance',component:GeneralInsuranceComponent},

];

