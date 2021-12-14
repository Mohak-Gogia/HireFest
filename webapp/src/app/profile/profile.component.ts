import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FetchInfoService } from '../shared/fetch-info.service';
import { CandidateDetails } from '../models/CandidateDetails';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public service : FetchInfoService,public router: Router) { }

  CandidateInfo!: CandidateDetails;

  ngOnInit(): void {
    this.service.fetchCandidateInfo().subscribe(
      res => {
        this.CandidateInfo = res;
        console.log(this.CandidateInfo);  
      },
      err => {
        console.log(err);
      }
    );
  }

  public onBack(): void {
    this.router.navigate(['/homepage']);
 }

  public logout(){
    localStorage.removeItem("isLoggedIn");
    this.router.navigate(["/login"]);
  }

}
