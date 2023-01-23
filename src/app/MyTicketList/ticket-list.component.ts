import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ticket } from "../Models/Ticket"
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  ticketarray: ticket[] = []
  page: number = 0;
  itemsPerPage: any;
  totalItems: any;
  
  user: any;
  constructor(private service: StaffService, private router: Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('username')
    this.getData()
  }

  getData() {
    this.service.getTicket().subscribe(res => {
      this.ticketarray = res;
      console.log( this.ticketarray);
      
    })
  }
  onLogout() {
    localStorage.removeItem('username');
    this.router.navigateByUrl('/')
  }


  searchform=new FormGroup({
    status:new FormControl("")
  })
  search(){
    this.service.searchfilter(this.searchform.getRawValue()).subscribe
    (res=>{
      this.ticketarray=res
      
    })
  }
  pagInation(page: any) {}
  

  dowloadFilevalue(obj:any){
    this.service.dowload(obj).subscribe(response=>{
      let blob:Blob=response.body as Blob;
      let url=window.URL.createObjectURL(blob)
      let a=document.createElement('a')
     a.download=obj;
     a.href=url;
     a.click();
    }
    )
  }

}




