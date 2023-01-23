
import { DOCUMENT } from '@angular/common';
import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnChanges, SimpleChanges, Inject } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { StaffService } from '../staff.service';
import { Staff } from "../Models/StaffRegister"
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  UpdateForm !: FormGroup;
  staffArray: Staff[] = [];
  // private _document: any;
  page: number = 0;
  itemsPerPage: any;
  totalItems: any;

  constructor(private fbuilder: FormBuilder, private service: StaffService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.service.GetStaffList().subscribe(res => {
      this.staffArray = res;
    })
  }
  DeleteStaff(id: string) {
    var delBtn = confirm(" Do you want to delete ?");
    if (delBtn == true) {
      this.service.DeleteStaff(id).subscribe(res => {
        window.location.reload();
      })
    }
  }

 pagInation(page:any){}
}













