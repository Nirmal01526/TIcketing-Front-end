import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { changepassword } from '../Models/changepassword';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  passwordform!: FormGroup
  submitted = false;
  staffArray: changepassword = {
    username: '',
    password: '',
    staff_id: ''
  };

  constructor(private route: ActivatedRoute, private service: StaffService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      {
        next: (params) => {
          console.log(params)
          const id = params.get("staff_id");
          console.log(id);
          if (id) {
            this.service.Updatedata(id).subscribe({
              next: (response) => {
                this.staffArray = response;
                console.log(this.staffArray);
                this.passwordform = this.formBuilder.group(
                  {
                    username: [this.staffArray.username, Validators.required,],
                    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]],
                    id: [this.staffArray.staff_id],
                  })
                console.log(this.staffArray.username);
              }
            })
          }

        }
      }
    )
  }
  onSubmit(): void {
    this.submitted = true;
    this.service.changepassword(this.passwordform.value).subscribe((res) => {
      if (res.message) {
        alert(res.message)
        this.router.navigateByUrl("/table")
      } else {
        alert("Password changed")
      }
    })
  }











  get f(): { [key: string]: AbstractControl } {
    return this.passwordform.controls;
  }
}
