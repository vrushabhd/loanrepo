import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ServiceComponent } from './service/service.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MakeloanComponent } from './makeloan/makeloan.component';
import { AdminComponent } from './admin/admin.component';
import { LadComponent } from './lad/lad.component';
import { FormstatusComponent } from './formstatus/formstatus.component';
import { AddloantypeComponent } from './addloantype/addloantype.component';
import { LoanprogramsComponent } from './loanprograms/loanprograms.component';
import { FilterPipe } from './filter.pipe';
import { StatuspipePipe } from './statuspipe.pipe';
import { UpdateloanComponent } from './updateloan/updateloan.component';
import { UpdateloanprogramComponent } from './updateloanprogram/updateloanprogram.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NewsComponent,
    ServiceComponent,
    AboutusComponent,
    ContactusComponent,
    MakeloanComponent,
    AdminComponent,
    LadComponent,
    FormstatusComponent,
    AddloantypeComponent,
    LoanprogramsComponent,
    FilterPipe,
    StatuspipePipe,
    UpdateloanComponent,
    UpdateloanprogramComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
