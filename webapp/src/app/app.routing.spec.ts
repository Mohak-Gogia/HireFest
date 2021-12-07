import { Location } from "@angular/common";
import { async, ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { Router } from "@angular/router";
import { TestComponent } from './test/test.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { routes } from "./app-routing.module";


describe("Router: App", () => {
  let location: Location;
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [AppComponent, LoginComponent, SignupComponent]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it("fakeAsync works", fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

//   it('should test redirection to default path (async)', async(() => {
//       fixture.detectChanges();
//       fixture.whenStable().then(() => {
//       expect(location.path()).toBe("/login");
//     });
//   }));


//   it('navigate to "/login" redirects you to /login', fakeAsync(() => {
//     router.navigate(["/login"]).then(() => {
//       expect(location.path()).toBe("/login");
//     });
//   }));

//   it('navigate to "/signup" takes you to /signup', fakeAsync(() => {
//     router.navigate(["/signup"]).then(() => {
//       expect(location.path()).toBe("/signup");
//     });
//   }));
});