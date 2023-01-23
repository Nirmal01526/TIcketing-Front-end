import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ticket } from '../Models/Ticket';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent {
  issueForm: any = FormGroup;
  submitted = false;
  user: any;
  name: any = [];
  constructor(private formBuilder: FormBuilder, private service: StaffService, private router: Router,private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.user = localStorage.getItem('username');
    // this.name=localStorage.getItem("name")
    this.issueForm = this.formBuilder.group(
      {
        username: [this.user],
        subject: ['', Validators.required],
        department: ['', Validators.required],
        description: ['', Validators.required],
        filename: ['']
      });
      this.route.paramMap.subscribe({
        next: (params) => {
          const filename = params.get("filename");
          console.log(filename);
    this.service.dowload(filename).subscribe(response => {
      let blob: Blob = response.body as Blob;
      let url = window.URL.createObjectURL(blob)
      let a = document.createElement('a')
      a.download = 'filename';
      a.href = url;
      a.click();
    }
    )
  }
})
  }
  file: any;
  onchange(event: any) {
    this.file = event.target.files[0];
    console.log("fileanme", this.file.name);
  }
  onsubmit(): void {
    this.submitted = true;
    if (this.issueForm.invalid) {
      alert("invalid")
      return;
    }
    else {
      this.service.addTicket(this.issueForm.value).subscribe((res) => {
        // console.log('view', this.issueForm.value);
        alert("successfully created")
        // localStorage.removeItem("name") 
        // this.router.navigateByUrl("/ticketlst")
        this.issueForm.setValue({
          subject: [''],
          department: [''],
          description: [''],
        })
      })
      if (this.file)
        this.service.fileUpload(this.file).subscribe(res => {
          // console.log("fileuploadddd", this.file);
          this.name = res;
          console.log("shfgdfhbs", this.name.message);
          // if (typeof event === 'object') {
          //   // Short link via api response
          //   console.log("link", this.shortLink = event.file);  
          // }
        })
    }

  }
  get f(): { [key: string]: AbstractControl } {
    return this.issueForm.controls;
  }
  onLogout() {
    localStorage.removeItem('username');
    this.router.navigateByUrl('/')
  }

  // UploadSubmited() {
  //   let formData = new FormData();
  //   formData.set('file', this.file)
  //   this.service.fileUpload(formData)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         alert("updated")
  //       },
  //     )

  // public dowloadFile(): void {
  //   this.service.dowload('javascript_tutorial.pdf').subscribe(response => {
  //     let blob: Blob = response.body as Blob;
  //     let url = window.URL.createObjectURL(blob)
  //     let a = document.createElement('a')
  //     a.download = 'javascript_tutorial.pdf';
  //     a.href = url;
  //     a.click();
  //   }
  //   )
  // }

}









