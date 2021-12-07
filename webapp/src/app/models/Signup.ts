export class Login {
    Fname: string;
    Lname: string;
    PhnNum: string;
    Email: string;
    Password: string;
    
    constructor(fname: string, lname: string, phnnum: string, email: string, password: string){
        this.Fname = fname;
        this.Lname = lname;
        this.PhnNum = phnnum;
        this.Email = email;
        this.Password = password;
    }
}