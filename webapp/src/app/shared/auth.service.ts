import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // loginFormModel = new FormGroup({
  //   Email : new FormControl('',[Validators.required, Validators.email]),
  //   Password : new FormControl(['',[Validators.required, Validators.minLength(6)]])
  // })

  // signupFormModel = new FormGroup({
  //   Fname : new FormControl('',[Validators.required]),
  //   Lname : new FormControl('',[Validators.required]),
  //   PhnNum : new FormControl('',[Validators.required, Validators.pattern("[0-9]{10}")]),
  //   Email : new FormControl('',[Validators.required, Validators.email]),
  //   Password : new FormControl(['', [Validators.required, Validators.minLength(6)]])
  // })

  public isLoggedIn(): string | null{
    return localStorage.getItem("isLoggedIn");
  }

  public login(body: any): Observable<any>{
    // let body = {
    //   email: this.loginFormModel.value.Email,
    //   password: this.loginFormModel.value.Password,
    // }
    return this.http.post(`${environment.apiEndPoint}/login`, body);
  }

  public signup(body: any): Observable<any>{
    // let body = {
    //   fName: this.signupFormModel.value.Fname,
    //   lName: this.signupFormModel.value.Lname,
    //   phoneno: this.signupFormModel.value.PhnNum,
    //   email: this.signupFormModel.value.Email,
    //   password: this.signupFormModel.value.Password
    // }
    return this.http.post(`${environment.apiEndPoint}/signup`, body);
  }
}
