import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ticket } from '../Models/Ticket';
import { StaffService } from '../staff.service';


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  page: number = 0;
  itemsPerPage: any;
  totalItems: any;
  ticketarray: ticket[] = []
  constructor(private service: StaffService, ) { }

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
}
