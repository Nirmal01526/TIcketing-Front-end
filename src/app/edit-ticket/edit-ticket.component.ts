import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTIcketComponent {

  issueForm: any = FormGroup;
  ticketArray: any = {}

  constructor(private route: ActivatedRoute, private service: StaffService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get("ticekt_id");
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
                },
              );
            }
          })
        }
      }
    })
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
          this.router.navigateByUrl("/showTicket")
        }
      })
    }
  }
}
