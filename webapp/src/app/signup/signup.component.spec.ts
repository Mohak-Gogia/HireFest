import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,RouterTestingModule, ToastrModule.forRoot() ],
      declarations: [ SignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('SignUp Form invalid when empty', () => {
    expect(component.signupFormModel.valid).toBeFalsy();
  });

  it('[Signup] First name Check - should check First name is invalid when empty', () => {
    let fname = component.signupFormModel.controls.Fname;
    expect(fname.valid).toBeFalsy();
    expect(fname.pristine).toBeTruthy();
  });

  it('[Signup] Last name Check - should check Last name is invalid when empty', () => {
    let lname = component.signupFormModel.controls.Lname;
    expect(lname.valid).toBeFalsy();
    expect(lname.pristine).toBeTruthy();
  });

  it('[Signup] Phone number Check - should check Phone number is invalid when empty', () => {
    let phnnum = component.signupFormModel.controls.PhnNum;
    expect(phnnum.valid).toBeFalsy();
    expect(phnnum.pristine).toBeTruthy();
  });

  it('[Signup] Email Check - should check email is invalid when empty', () => {
    let email = component.signupFormModel.controls.Email;
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
  });

  it('[Signup] Password Check - should check password is invalid when empty', () => {
    let password = component.signupFormModel.controls.Password;
    expect(password.valid).toBeFalsy();
    expect(password.pristine).toBeTruthy();
  });

  it('Email field validity - false when invalid email', () => {
    let errors = {};
    let email = component.signupFormModel.controls['Email'];
    email.setValue("test");
    errors = email.errors || {};
    expect(errors).toBeTruthy();
  });

  it('Password field validity - false when invalid password', () => {
    let errors = {};
    let pass = component.signupFormModel.controls['Password'];
    pass.setValue("test");
    errors = pass.errors || {};
    expect(errors).toBeTruthy();
  });

  it('[Signup-Form-Submit] - should check form is submitted', () => {
    expect(component.signupFormModel.invalid).toBeTruthy();
    component.signupFormModel.controls['Email'].setValue("test@test.com");
    component.signupFormModel.controls['Password'].setValue("test12232");
    component.signupFormModel.controls['Fname'].setValue("Test");
    component.signupFormModel.controls['Lname'].setValue("test");
    component.signupFormModel.controls['PhnNum'].setValue("9898786754");
    expect(component.signupFormModel.valid).toBeTruthy();
  });

});
