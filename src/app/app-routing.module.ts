import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RaiseTicketComponent } from './raise-ticket/raise-ticket.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';
import { TicketListComponent } from './MyTicketList/ticket-list.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { ShowTicketComponent } from './show-ticket/show-ticket.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { StaffdashboardComponent } from './staffdashboard/staffdashboard.component';
import { StaffticketlistComponent } from './staffticketlist/staffticketlist.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { HomeComponent } from './home/home.component';
import { PracticeComponent } from './practice/practice.component';
import { CountdataComponent } from './countdata/countdata.component';
import { CloseCountComponent } from './close-count/close-count.component';
import { EditTIcketComponent } from './edit-ticket/edit-ticket.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', component: HomePageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'table', component: TableComponent },
  { path: 'CustomerRegister', component: CustomerRegisterComponent },
  { path: 'ticket', component: RaiseTicketComponent },
  { path: 'Myticketlist', component: TicketListComponent },
  { path: 'Customerlist', component: CustomerTableComponent },
  { path: 'Staff/updateform/:staff_id/update', component: UpdateFormComponent },
  { path: 'showTicket', component: ShowTicketComponent },
  { path: 'Staff/changepassword/:staff_id', component: ChangePasswordComponent },
  { path: 'staffdashboard', component: StaffdashboardComponent },
  { path: 'staffticketlist', component: StaffticketlistComponent },
  { path: 'Staff/ticketdetails/:ticket_id/ticket', component: TicketDetailsComponent },
  { path: 'homedashboard', component: HomeComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'Staff/open', component: CountdataComponent },
  { path: 'Staff/close', component: CloseCountComponent },
  { path: 'Staff/Adminedit/:ticekt_id/ticket', component: EditTIcketComponent },]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
