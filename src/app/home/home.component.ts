import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ticket } from '../Models/Ticket';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Count:any
  ticketarray: ticket[] = []
  ticket: any = []
 constructor(private service:StaffService ,private http:HttpClient){}
  ngOnInit():void{
    this.service.count().subscribe(res => {
      this.Count = res;
      console.log(res)
    })
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
// opencount() {
//   const URL = `http://localhost:33540/api/Staff/open`
//   this.http.get(URL).subscribe(result => {
//     console.log(result)
//     this.ticket=result
//   })
//   }
//   closecount() {
//     const URL1 = `http://localhost:33540/api/Staff/close`
//     this.http.get(URL1).subscribe(result => {
//       console.log(result)
//       this.ticket=result
//     })
//     }
 }