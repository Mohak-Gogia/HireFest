export class CandidateDetails {
    Fname: string;
    Lname: string;
    PhnNum: string;
    Email: string;

    constructor(fname: string, lname: string, phnnum: string, email: string){
        this.Fname = fname;
        this.Lname = lname;
        this.PhnNum = phnnum;
        this.Email = email;
    }
}