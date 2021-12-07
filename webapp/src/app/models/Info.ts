export class Info {
    AssessmentId: number;
    Title: string;
    Description: string;
    Time: number;
    Score: number;
    Topics: string;

    constructor(Id: number, Title: string, Description: string, Time: number, Score: number, Topics: string){
        this.AssessmentId = Id;
        this.Title = Title;
        this.Description = Description;
        this.Time = Time;
        this.Score = Score;
        this.Topics = Topics;
    }
}