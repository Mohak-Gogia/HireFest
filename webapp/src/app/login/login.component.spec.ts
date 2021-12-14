
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { ToastrModule } from 'ngx-toastr';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,RouterTestingModule,ToastrModule.forRoot() ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Login Form invalid when empty', () => {
    expect(component.loginFormModel.valid).toBeFalsy();
  });

  it('[Login] Email Check - should check email is invalid when empty', () => {
    let email = component.loginFormModel.controls.Email;
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
  });

  it('[Login] Password Check - should check password is invalid when empty', () => {
    let password = component.loginFormModel.controls.Password;
    expect(password.valid).toBeFalsy();
    expect(password.pristine).toBeTruthy();
  });

  it('Email field validity - false when invalid email', () => {
    let errors = {};
    let email = component.loginFormModel.controls['Email'];
    email.setValue("test");
    errors = email.errors || {};
    expect(errors).toBeTruthy();
  });

  it('Password field validity - false when invalid password', () => {
    let errors = {};
    let pass = component.loginFormModel.controls['Password'];
    pass.setValue("test");
    errors = pass.errors || {};
    expect(errors).toBeTruthy();
  });

  it('[Login-Form-Submit] - should check form is submitted', () => {
    expect(component.loginFormModel.invalid).toBeTruthy();
    component.loginFormModel.controls['Email'].setValue("test@test.com");
    component.loginFormModel.controls['Password'].setValue("test12232");
    expect(component.loginFormModel.valid).toBeTruthy();
  });

});
