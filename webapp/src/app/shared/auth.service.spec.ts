import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,RouterTestingModule ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Login Form invalid when empty', () => {
    expect(service.loginFormModel.valid).toBeFalsy();
  });

  it('SignUp Form invalid when empty', () => {
    expect(service.signupFormModel.valid).toBeFalsy();
  });

  it('[Login] Email Check - should check email is invalid when empty', () => {
    let email = service.loginFormModel.controls.Email;
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
  });

  it('[Login] Password Check - should check password is invalid when empty', () => {
    let password = service.signupFormModel.controls.Password;
    expect(password.valid).toBeFalsy();
    expect(password.pristine).toBeTruthy();
  });

  it('[Signup] First name Check - should check First name is invalid when empty', () => {
    let fname = service.signupFormModel.controls.Fname;
    expect(fname.valid).toBeFalsy();
    expect(fname.pristine).toBeTruthy();
  });

  it('[Signup] Last name Check - should check Last name is invalid when empty', () => {
    let lname = service.signupFormModel.controls.Lname;
    expect(lname.valid).toBeFalsy();
    expect(lname.pristine).toBeTruthy();
  });

  it('[Signup] Phone number Check - should check Phone number is invalid when empty', () => {
    let phnnum = service.signupFormModel.controls.PhnNum;
    expect(phnnum.valid).toBeFalsy();
    expect(phnnum.pristine).toBeTruthy();
  });

  it('Email field validity - false when invalid email', () => {
    let errors = {};
    let email = service.loginFormModel.controls['Email'];
    email.setValue("test");
    errors = email.errors || {};
    expect(errors).toBeTruthy();
  });

  it('[Login-Form-Submit] - should check form is submitted', () => {
    expect(service.loginFormModel.invalid).toBeTruthy();
    service.loginFormModel.controls['Email'].setValue("test@test.com");
    service.loginFormModel.controls['Password'].setValue("test12232");
    expect(service.loginFormModel.valid).toBeTruthy();
  });

  it('[Signup-Form-Submit] - should check form is submitted', () => {
    expect(service.signupFormModel.invalid).toBeTruthy();
    service.signupFormModel.controls['Email'].setValue("test@test.com");
    service.signupFormModel.controls['Password'].setValue("test12232");
    service.signupFormModel.controls['Fname'].setValue("Test");
    service.signupFormModel.controls['Lname'].setValue("test");
    service.signupFormModel.controls['PhnNum'].setValue("9898786754");
    expect(service.signupFormModel.valid).toBeTruthy();
  });

}); 
