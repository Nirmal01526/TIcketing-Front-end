import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { staffLogin } from "../Models/StaffLogin"
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  submitted = false;
  loginForm !: FormGroup;
  user: any;
  res: any;
  constructor(private formbuilder: FormBuilder, private service: StaffService, private router: Router) {

  }
  ngOnInit(): void {

    this.loginForm = this.formbuilder.group({
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]]
    })

  }
  onSubmit() {
    this.submitted = true;
    var local = {

      username: '',
    }

    if (this.loginForm.invalid) {
      return;
    }
    else (this.loginForm.valid)
    {
      this.service.adminlogin(this.loginForm.value)
        .subscribe({
          next: (res) => {
            console.log(res);
            if (res.Message == "Welcome Admin.") {
              alert(res.Message)
              localStorage.setItem('username', res.username)
              // localStorage.setItem('token',res.token)
              this.router.navigateByUrl('/homedashboard')

            } else if (res.Message == "Welcome Staff.") {

              let data = res.data[0]
              localStorage.setItem('username', data.username)
              localStorage.setItem('dept', data.department)
              localStorage.setItem('token',res.token)
              this.router.navigateByUrl('/staffdashboard')
            } else if (res.Message == "Welcome customer.") {
              alert(res.Message);
              localStorage.setItem('username', res.username)
              localStorage.setItem('token',res.token)
              this.router.navigateByUrl('Myticketlist')
            }
            else {
              alert(res.Message)
            }
          },
        })
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

}
