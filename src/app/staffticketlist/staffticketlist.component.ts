import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ticket } from '../Models/Ticket';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-staffticketlist',
  templateUrl: './staffticketlist.component.html',
  styleUrls: ['./staffticketlist.component.css']
})
export class StaffticketlistComponent {
  ticketarray: any = []
  page: number = 0;
  itemsPerPage: any;
  totalItems: any;
  dept: any
  ticket: any;
  constructor(private service: StaffService) { }

  ngOnInit(): void {
    this.dept = localStorage.getItem('dept')
    this.service.GetTicketDepartment(this.dept).subscribe(res => {
      this.ticketarray[0] = res;
      console.log(this.ticketarray[0]);
    })
  }
  searchform=new FormGroup({
    status:new FormControl("")
  })
  search(){
    this.service.searchfilter(this.searchform.getRawValue()).subscribe
    (res=>{
      this.ticketarray[0]=res
      
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






