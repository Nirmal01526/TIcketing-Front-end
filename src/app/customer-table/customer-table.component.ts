import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Staff } from "../Models/StaffRegister"
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent {
  page: number = 0;
  itemsPerPage: any;
  totalItems: any;
  updatForm !: FormGroup;
  staffArray: Staff[] = [];
  constructor(private fbuilder: FormBuilder, private service: StaffService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.service.getCustomerList().subscribe(res => {
      this.staffArray = res;
    })
  }
  DeleteStaff(id: string) {
    var delBtn = confirm(" Do you want to delete ?");
    if (delBtn == true) {
      this.service.DeleteStaff(id).subscribe(res => { })
      window.location.reload();
    }
  }

  pagInation(page: any) {}
}


