import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-close-count',
  templateUrl: './close-count.component.html',
  styleUrls: ['./close-count.component.css']
})
export class CloseCountComponent {
  ticketarray: any = []
  page: number = 0;
  itemsPerPage: any;
  totalItems: any;
  dept: any
  ticket: any;
  constructor(private service: StaffService, private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void { 
  let URL= `http://localhost:33540/api/Staff/close`
    this.http.get(URL).subscribe(result => {
      this.ticketarray=result;
      console.log("Result",result)
    })
    this.dept = localStorage.getItem('dept')
    // this.service.GetTicketDepartment(this.dept).subscribe(res => {
    //   this.ticketarray = res;
    //   console.log(this.ticketarray[0]);
    // })
  }
  pagInation(page: any) {}
 
}
