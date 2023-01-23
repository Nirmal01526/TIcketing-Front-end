import { ListKeyManager } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Staff } from "../Models/StaffRegister"
import { update } from '../Models/updateStaff';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent {
  updateForm !: FormGroup;
  submitted = false;

  staffArray: update = {
    username: 'fsbgf',
    email: '',
    dob: '',
    role: '',
    mobileNo: '',
    staff_id: ''
  };
  constructor(private route: ActivatedRoute, private service: StaffService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get("staff_id");
        console.log(id);

        if (id) {
          this.service.Updatedata(id).subscribe({
            next: (response) => {
              this.staffArray = response;
              console.log(this.staffArray);

              this.updateForm = this.formBuilder.group(
                {
                  username: [this.staffArray.username, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
                  email: [this.staffArray.email, [Validators.required, Validators.email]],
                  dob: [this.staffArray.dob, [Validators.required]],
                  role: [this.staffArray.role, [Validators.required]],
                  mobileNo: [this.staffArray.mobileNo, [Validators.required]],
                  id: [this.staffArray.staff_id],
                },

              );

            }
          })
        }
      }
    })
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.updateForm.invalid) {
      return;
    }
    else (this.updateForm.valid)
    {
      this.service.Update(this.updateForm.value).subscribe((res: any) => {
        if (res.message == "staff Not Found") {
          alert(res.message)
        } else {
          alert("updated successfully")
          this.router.navigateByUrl("/table")
        }
      })
    }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.updateForm.controls;
  }

}







