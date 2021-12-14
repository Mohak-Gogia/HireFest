export class CandidateDetails {
    FName: string;
    LName: string;
    Phoneno: string;
    Email: string;

    constructor(fname: string, lname: string, phnnum: string, email: string){
        this.FName = fname;
        this.LName = lname;
        this.Phoneno = phnnum;
        this.Email = email;
    }
}