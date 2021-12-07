import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public service : AuthService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.signupFormModel.reset();
  }
  
  public goToLogin(): void{
    this.router.navigate(['login']);
  }

  public onSubmit(): void{
    console.log(this.service.signupFormModel.value);
    let userID = this.service.loginFormModel.value.Email;
    this.service.signup().subscribe(
      res => {
        this.service.signupFormModel.reset();
        if(res == "Signup Successful")
        {
          this.toastr.success("Signup Successful");
          localStorage.setItem("isLoggedIn",userID);
          this.router.navigate(["/homepage"]);
        }
        else
        {
          this.toastr.error("Please enter valid details","User aready exists");
          this.router.navigate(["/signup"]);
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
