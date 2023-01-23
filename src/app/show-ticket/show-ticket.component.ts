import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ticket } from '../Models/Ticket';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-show-ticket',
  templateUrl: './show-ticket.component.html',
  styleUrls: ['./show-ticket.component.css']
})
export class ShowTicketComponent {
  ticketarray: ticket[] = []
  page: number = 0;
  itemsPerPage: any;
  totalItems: any;
  constructor(private service: StaffService) { }

  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.service.getTicket().subscribe(res => {
      this.ticketarray = res;
      console.log(this.ticketarray);

    })
  }
  searchform = new FormGroup({
    status: new FormControl("")
  })
  search() {
    this.service.searchfilter(this.searchform.getRawValue()).subscribe
      (res => {
        this.ticketarray = res

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
