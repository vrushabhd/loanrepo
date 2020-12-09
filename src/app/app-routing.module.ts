import { ServiceComponent } from './service/service.component';
import { RegisterComponent } from './register/register.component';
import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MakeloanComponent } from './makeloan/makeloan.component';
import { AdminComponent } from './admin/admin.component';
import { LadComponent } from './lad/lad.component';
import { FormstatusComponent } from './formstatus/formstatus.component';
import { AddloantypeComponent } from './addloantype/addloantype.component';
import { LoanprogramsComponent } from './loanprograms/loanprograms.component';
import { UpdateloanComponent } from './updateloan/updateloan.component';
import { UpdateloanprogramComponent } from './updateloanprogram/updateloanprogram.component';


const routes: Routes = [
{path:'',redirectTo:"home",pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'news',component:NewsComponent},
{path:'aboutus',component:AboutusComponent},
{path:'contactus',component:ContactusComponent},
{path:'services',component:ServiceComponent},
{path:'makeloan',component:MakeloanComponent},
{path:'admin',component:AdminComponent},
{path:'lad',component:LadComponent},
{path:'formstatus',component:FormstatusComponent},
{path:'addloantype',component:AddloantypeComponent},
{path:'loanprograms',component:LoanprogramsComponent},

{path:'updateloan/:id',component:UpdateloanComponent},
{path:'updateloanprogram/:id',component:UpdateloanprogramComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
