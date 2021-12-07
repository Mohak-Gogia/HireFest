import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service : AuthService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.loginFormModel.reset();
  }

  public goToSignup(): void{
    this.router.navigate(['signup']);
  }

  public onSubmit(): void{
    console.log(this.service.loginFormModel.value);
    let userID = this.service.loginFormModel.value.Email;
    this.service.login().subscribe(
      res => {
        this.service.loginFormModel.reset();
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
