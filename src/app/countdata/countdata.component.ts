import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-countdata',
  templateUrl: './countdata.component.html',
  styleUrls: ['./countdata.component.css']
})
export class CountdataComponent {

  ticketarray: any = []
  page: number = 0;
  itemsPerPage: any;
  totalItems: any;
  dept: any
  ticket: any;
  constructor(private service: StaffService, private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void { 
  let URL= `http://localhost:33540/api/Staff/open`
  let URL1= `http://localhost:33540/api/Staff/close`

   if(URL= `http://localhost:33540/api/Staff/open`){
    this.http.get(URL).subscribe(result => {
      this.ticketarray=result;
      console.log("Result",result)
    })
  }
    else if( URL1= `http://localhost:33540/api/Staff/close`){
      this.http.get(URL1).subscribe(result => {
        this.ticketarray=result;
        console.log("Result",result)
      })
    }
    else{
      this.service.getTicket().subscribe(res => {
        this.ticketarray = res;
        console.log( this.ticketarray);
        
      })
    }
   
  
    this.dept = localStorage.getItem('dept')
    // this.service.GetTicketDepartment(this.dept).subscribe(res => {
    //   this.ticketarray = res;
    //   console.log(this.ticketarray[0]);
    // })
  }
  pagInation(page: any) {}
  opencount() {
    
  }
  closecount() {
    
  }
}









