import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public service : AuthService, private router: Router, private toastr: ToastrService) { }

  signupFormModel = new FormGroup({
    Fname : new FormControl('',[Validators.required]),
    Lname : new FormControl('',[Validators.required]),
    PhnNum : new FormControl('',[Validators.required, Validators.pattern("[0-9]{10}")]),
    Email : new FormControl('',[Validators.required, Validators.email]),
    Password : new FormControl(['', [Validators.required, Validators.minLength(6)]])
  })

  ngOnInit(): void {
    this.signupFormModel.reset();
  }
  
  public goToLogin(): void{
    this.router.navigate(['login']);
  }

  public onSubmit(): void{
    console.log(this.signupFormModel.value);
    let userID = this.signupFormModel.value.Email;
    let body = {
      fName: this.signupFormModel.value.Fname,
      lName: this.signupFormModel.value.Lname,
      phoneno: this.signupFormModel.value.PhnNum,
      email: this.signupFormModel.value.Email,
      password: this.signupFormModel.value.Password
    }
    this.service.signup(body).subscribe(
      res => {
        this.signupFormModel.reset();
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
