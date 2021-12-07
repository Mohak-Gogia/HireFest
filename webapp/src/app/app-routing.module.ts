import { TestComponent } from './test/test.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path : '', redirectTo: '/login', pathMatch: 'full'},
  { path : 'login', component: LoginComponent},
  { path : 'signup', component: SignupComponent},
  { path : 'homepage', component: HomepageComponent, canActivate: [AuthGuard]},
  { path: 'homepage/:id', component: TestComponent, canActivate: [AuthGuard] },
  { path:  'profile', component:  ProfileComponent, canActivate: [AuthGuard] },
  { path : '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
