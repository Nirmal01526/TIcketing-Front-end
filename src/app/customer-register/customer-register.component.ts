import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent {
  form !: FormGroup ;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, private service:StaffService ,private router:Router) {
   
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: ['',[Validators.required,Validators.minLength(6), Validators.maxLength(20)] ],
        email: ['', [Validators.required, Validators.email]],
        dob:['',Validators.required],
        role:['',Validators.required],
        department:[''],
        mobileNo:['',Validators.required,Validators.minLength(10)],
        password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(20),]],
        confirmPassword: ['', Validators.required],
      },
    );
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      alert("invalid")
      return;
    }
    else(this.form.valid)
    {
      console.log(this.form);
      this.service.Addstaff(this.form.value).subscribe((res: any) => {
     if(res.message =="Username already exist"){
      alert(res.message)
     }else{
      alert("Register successfully")
      this.router.navigateByUrl("/dashboard")
     }
      })
    }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
   
}
