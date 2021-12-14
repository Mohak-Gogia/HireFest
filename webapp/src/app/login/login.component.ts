import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service : AuthService, private router: Router,private toastr: ToastrService) { }

  loginFormModel = new FormGroup({
    Email : new FormControl('',[Validators.required, Validators.email]),
    Password : new FormControl(['',[Validators.required, Validators.minLength(6)]])
  })
  
  ngOnInit(): void {
    this.loginFormModel.reset();
  }

  public goToSignup(): void{
    this.router.navigate(['signup']);
  }

  public onSubmit(): void{
    console.log(this.loginFormModel.value);
    let userID = this.loginFormModel.value.Email;
    let body = {
      email: this.loginFormModel.value.Email,
      password: this.loginFormModel.value.Password,
    }
    this.service.login(body).subscribe(
      res => {
        this.loginFormModel.reset();
        if(res == "Login Successful")
        {
          this.toastr.success("Login Successful");
          localStorage.setItem("isLoggedIn",userID);
          this.router.navigate(["/homepage"]);
        }
        else
        {
          this.toastr.error("Please enter valid details","Invalid Credentials");
          this.router.navigate(["/login"]);
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
