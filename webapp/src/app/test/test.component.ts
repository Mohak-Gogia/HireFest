import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchInfoService } from '../shared/fetch-info.service';
import { Test } from '../models/Test'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private _Activatedroute:ActivatedRoute,
    private router:Router, public service : FetchInfoService) { }

  id: any;
  Test_Info!: any;
  interval: any;
  timeLeft!: number;
  qProgress: any;
  candidateScore!: number;
  totalScore!: number;
  popup: any;

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
    });
    this.popup = false;
    this.candidateScore = 0;
    this.totalScore = 0;
    this.qProgress = 0;
    this.service.fetchTestInfo(this.id).subscribe(
      res => {
        this.Test_Info = this.formatData(res);
        // console.log(this.Test_Info);  
        let sum = 0;
        for(let i=0;i<this.Test_Info.length;i++){
          sum = sum + this.Test_Info[i].Time;
        }
        this.timeLeft = this.Test_Info[0].Time;
        this.startTimer();
      },
      err => {
        console.log(err);
      }
    );
  }

  onBack(): void {
    this.router.navigate(['/homepage']);
 }

 formatData(res: any): object{
  let quesId = [];
  let ques = [];
  let options = [];
  let ans = []
  let temp = []
  let time = []
  let score = []
  let optId = [];
  let temp2 = []
  for(let i=0;i<res.length;i++){
    if(res[i].IsAnswer == true){
        ans.push(res[i].Description);
    }
    temp.push(res[i].Description)
    temp2.push(res[i].OptionId)
    if(temp.length == 4){
        options.push(temp);
        optId.push(temp2);
        temp = [];
        temp2 = [];
    }
    if(i%4==0){
        quesId.push(res[i].QuestionId);
        ques.push(res[i].Question);
        time.push(res[i].Time);
        score.push(res[i].Score);
    }
  }
  let result = []
  for(let i=0;i<(res.length/4);i++)
  {
    result.push({
      QuesId: quesId[i],
      Question: ques[i],
      Time: time[i],
      Score: score[i],
      Options: options[i],
      OptionId: optId[i],
      Answer: ans[i]
    });
  } 
  return result;
 }


 startTimer(): void{
  this.interval = setInterval(() => {
    if(this.timeLeft != 0){
    this.timeLeft--;
    }
    else{
      this.finish();
    }
  },60000)
 };

endTimer(): void{
  clearInterval(this.interval);
}

public showSelected(qId: number, choice: string, correctAnswer: string,optId: number): void{
  //console.log(this.Test_Info[this.qProgress].OptionId[optId]);
  let candidateSelectedOption = {
    candidateAssessmentId: this.id,
    assessmentQuestionId: qId,
    questionOptionId: this.Test_Info[this.qProgress].OptionId[optId]
  }
  this.service.saveResponses(candidateSelectedOption).subscribe(
    res => { console.log(res) },
    err => { console.log(err) }
  );
  this.totalScore += this.Test_Info[this.qProgress].Score;
  if(choice === correctAnswer){
    this.candidateScore += this.Test_Info[this.qProgress].Score;
  }
  this.qProgress++;
  if(this.qProgress != this.Test_Info.length)
  {
    this.timeLeft = this.Test_Info[this.qProgress].Time;
  }
  if (this.qProgress == this.Test_Info.length ) {
    this.finish();  
  }
}

 public finish(): void{
  this.endTimer();
  this.popup = true;
  let candidateResult = {
    CandidateId: 1,
    AssessmentId: this.id,
    Score: this.candidateScore,
    Status: "Completed"
  }
  //console.log(candidateResult);
  this.service.saveResult(candidateResult).subscribe(
    res => { console.log(res) },
    err => { console.log(err) }
  );
  setTimeout(() => {
    this.router.navigate(["/homepage"]);
  }, 5000);
 }
}