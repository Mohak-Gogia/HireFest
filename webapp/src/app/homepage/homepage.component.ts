import { Info } from './../models/Info';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchInfoService } from '../shared/fetch-info.service';
import { SplitPipe } from '../pipes/split.pipe';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public service : FetchInfoService, private router: Router) { }

  // givenAssessments: any;
  userID: any = localStorage.getItem("isLoggedIn");
  Assessment_Info!: Info[];

  ngOnInit(): void {
    // this.service.fetchTestInfo(this.userID).subscribe(
    //   res => { this.givenAssessments = res;
    //     console.log(this.givenAssessments);
    //    },
    //   err => { console.log(err) }
    // );
    this.service.fetchInfo().subscribe(
      res => {
        this.Assessment_Info = res;
        //console.log(this.Assessment_Info[0]);  
      },
      err => {
        console.log(err);
      }
    );
  }

  public toProfile(){
    this.router.navigate(["/profile"]);
  }

  public logout(){
    localStorage.removeItem("isLoggedIn");
    this.router.navigate(["/login"]);
  }

  show(id: number){
    //console.log(id);
  }
}
