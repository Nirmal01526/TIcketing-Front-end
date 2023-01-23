import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Staff } from "./Models/StaffRegister"
import { Observable } from 'rxjs';
import { ticket } from "./Models/Ticket"

const endpoint = 'https://jsonplaceholder.typicode.com/posts';
@Injectable({
  providedIn: 'root'
})
export class StaffService {
file:any;
  constructor(private http: HttpClient) { }

  Url = "http://localhost:33540/api/Staff";
  Url1 = "http://localhost:33540/api/Staff/";
  url2 = "http://localhost:33540/api/fileUpload/";
  depturl = "http://localhost:33540/api/Staff/GetTicketDepartment?dept="
  URL1:string="http://localhost:33540/api/Staff/searchfilter"


  getAllPosts(): Observable<any> {
    return this.http.get(endpoint);
  }
  
  GetStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.Url);
  }
  Addstaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(this.Url, staff);

  } Update(update: any): Observable<Staff> {
    return this.http.post<any>(`${this.Url1}update`, update);

  } DeleteStaff(id: string): Observable<Staff> {
    return this.http.delete<Staff>(this.Url + '/' + id + '/delete')

  } adminlogin(adminloginObject: any) {
    return this.http.post<any>(`${this.Url1}adminlogin`, adminloginObject);
  }
  addTicket(ticket: any): Observable<any> {
    return this.http.post(`${this.Url1}AddTicket`, ticket)
  }
  getTicket(): Observable<ticket[]> {
    return this.http.get<ticket[]>(`${this.Url1}getTicket`);
  }
  GetStaffList(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${this.Url1}Stafflist`);
  }
  getCustomerList(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${this.Url1}Customerlist`);
  }
  Updatedata(id: string): Observable<Staff> {
    return this.http.get<Staff>(this.Url + '/' + id + '/update')
  }
  changepassword(update: any): Observable<Staff> {
    return this.http.post<any>(`${this.Url1}changepassword`, update);
  }
  fileUpload(file: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.url2}Uploadfile`,formData);
  }
  GetTicketDepartment(dept: any): Observable<Staff> {
    return this.http.get<Staff>(this.depturl + dept)
  }
  ticketid(id: string): Observable<Staff> {
    return this.http.get<Staff>(this.Url + '/' + id + '/ticket')
  }
  updatedetails(ticket: any): Observable<any> {
    return this.http.post<any>(`${this.Url1}updateticketdetails`, ticket)
  }
  searchfilter(ticket: any): Observable<any> {
    return this.http.post<any>(`${this.URL1}`, ticket)
  }
  count(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${this.Url1}count`);
  }
  
  dowload(download:any){
    return  this.http.get(this.url2+download+".pdf"+"/filedownload",
     {observe:'response',responseType:'blob'}
      )
   }
}