import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent {

  issueForm: any = FormGroup;
  ticketArray: any = {}
  name: any=[]

  constructor(private route: ActivatedRoute, private service: StaffService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get("ticket_id");
        console.log(id);

        if (id) {
          this.service.ticketid(id).subscribe({
            next: (response) => {
              this.ticketArray = response;
              console.log(response);

              this.issueForm = this.formBuilder.group(
                {
                  username: [this.ticketArray.username],
                  subject: [this.ticketArray.subject],
                  description: [this.ticketArray.description],
                  status: [this.ticketArray.status],
                  ticket_id: [this.ticketArray.ticekt_id],
                  filename: [""],
                },
              );
            }
          })
        }
      }
    })
  }
  file: any;
  onchange(event: any) {
    this.file = event.target.files[0];
    console.log("fileanme", this.file.name);
  }
  onsubmit(): void {
    if (this.issueForm.invalid) {
      return;
    }
    else (this.issueForm.valid)
    {
      this.service.updatedetails(this.issueForm.value).subscribe((res: any) => {
        if (res.message == "staff Not Found") {
          alert(res.message)
        } else {
          alert("updated successfully")
          this.router.navigateByUrl("/staffticketlist")
        }
      })
      if (this.file)
      this.service.fileUpload(this.file).subscribe(res => {
        this.name = res;
        console.log("shfgdfhbs", this.name.message);

      })
    }
  }
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










