import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import {MatCardModule} from '@angular/material/card';
import { TicketListComponent } from './MyTicketList/ticket-list.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { ShowTicketComponent } from './show-ticket/show-ticket.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { StaffdashboardComponent } from './staffdashboard/staffdashboard.component';
import { StaffticketlistComponent } from './staffticketlist/staffticketlist.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { HomeComponent } from './home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PracticeComponent } from './practice/practice.component';
import { CountdataComponent } from './countdata/countdata.component';
import { CloseCountComponent } from './close-count/close-count.component';
import { EditTIcketComponent } from './edit-ticket/edit-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    TableComponent,
    HomePageComponent,
    CustomerRegisterComponent,
    RaiseTicketComponent,
    TicketListComponent,
    CustomerTableComponent,
    UpdateFormComponent,
    ShowTicketComponent,
    ChangePasswordComponent,
    StaffdashboardComponent,
    StaffticketlistComponent,
    TicketDetailsComponent,
    HomeComponent,
    PracticeComponent,
    CountdataComponent,
    CloseCountComponent,
    EditTIcketComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
